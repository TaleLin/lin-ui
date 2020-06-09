const {
  src,
  dest,
  parallel
} = require('gulp');
const less = require('gulp-less');
const imagemin = require('gulp-imagemin');
const cssmin = require('gulp-clean-css');
const jsonmin = require('gulp-jsonminify');
const jsmin = require('gulp-uglify-es').default;
const wxmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const del = require('del');

const buildWxss = (srcPath, remainPath, distPath) => () =>
  src([srcPath, remainPath])
    .pipe(less())
    .pipe(cssmin())
    .pipe(rename(srcPath => {
      srcPath.extname = '.wxss';
    }))
    .pipe(dest(distPath));

const copy = (srcPath, distPath, ext) => () =>
  src(`${srcPath}/*.${ext}`)
    .pipe(dest(distPath));

const buildWxml = (srcPath, remainPath, distPath) => () =>
  src([srcPath, remainPath])
    .pipe(wxmlmin({
      removeComments: true,
      // collapseWhitespace: true,
      keepClosingSlash: true,
      caseSensitive: true
    }))
    .pipe(dest(distPath));

const buildJson = (srcPath, distPath) => () =>
  src(srcPath)
    .pipe(jsonmin())
    .pipe(dest(distPath));

const buildJs = (srcPath, distPath) => () =>
  src(srcPath)
    .pipe(jsmin())
    .pipe(dest(distPath));

const buildImage = (srcPath, distPath) => () =>
  src(srcPath)
    .pipe(imagemin())
    .pipe(dest(distPath));

const copyStatic = (srcPath, distPath, env = 'build') => {
  if (env === 'build') {
    return parallel(
      copy(srcPath, distPath, 'wxs')
    );
  } else {
    return parallel(
      copy(srcPath, distPath, 'wxml'),
      copy(srcPath, distPath, 'wxs'),
      copy(srcPath, distPath, 'json'),
      copy(srcPath, distPath, 'js'),
      copy(srcPath, distPath, 'png')
    );
  }
};

const clean = (cleanPath) => () =>
  del([cleanPath], {
    force: true
  });

module.exports = {
  buildWxss,
  buildWxml,
  buildImage,
  buildJson,
  buildJs,
  copyStatic,
  clean,
  copy
};