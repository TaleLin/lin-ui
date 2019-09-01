const {
  src,
  dest,
  parallel
} = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
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

const copyStatic = (srcPath, distPath) =>
  parallel(
    copy(srcPath, distPath, 'wxml'),
    copy(srcPath, distPath, 'wxs'),
    copy(srcPath, distPath, 'json'),
    copy(srcPath, distPath, 'js'),
    copy(srcPath, distPath, 'png')
  );

const clean = (cleanPath) => () =>
  del([cleanPath], {
    force: true
  });

module.exports = {
  buildWxss,
  copyStatic,
  clean,
  copy
};