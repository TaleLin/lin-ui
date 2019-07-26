const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');
const componentData = require('./build-tool');
const result = `{common,behaviors,${componentData()}}`;
const isCustom = result == `{common,behaviors}`;

// js => js
gulp.task('dispose-js', () => {
  const path = isCustom ? `../src/${result}/*.js` : '../src/**/*.js';
  return gulp.src(path)
    .pipe(gulp.dest('../dist/'));
});


gulp.task('dispose-wxss', () => {
  const path = isCustom ? `../src/${result}/*.less` : '../src/**/*.less',
    remainPath = isCustom ? `!../src/${result}/_*.less` : '!../src/**/_*.less';
  return gulp.src([path, remainPath])
    .pipe(less())
    .pipe(cssmin())
    .pipe(rename((path) => {
      path.extname = '.wxss';
    }))
    .pipe(gulp.dest('../dist/'));
});

// wxs => wxs
gulp.task('dispose-wxs', () => {
  const path = isCustom ? `../src/${result}/*.wxs` : '../src/**/*.wxs';
  return gulp.src(path)
    .pipe(gulp.dest('../dist/'));
});

// json => json
gulp.task('dispose-json', () => {
  const path = isCustom ? `../src/${result}/*.json` : '../src/**/*.json';
  return gulp.src(path)
    .pipe(gulp.dest('../dist/'));
});

// wxml => wxml
gulp.task('dispose-wxml', () => {
  const path = isCustom ? `../src/${result}/*.wxml` : '../src/**/*.wxml';
  return gulp.src(path)
    .pipe(gulp.dest('../dist/'));
});

// copy
gulp.task('dispose-copy', () => {
  const path = isCustom ? `../src/${result}/image/**` : '../src/**/image/**';
  return gulp.src(path)
    .pipe(gulp.dest('../dist/'));
});

gulp.task('default', gulp.series(
  'dispose-js',
  'dispose-wxss',
  'dispose-wxml',
  'dispose-wxs',
  'dispose-copy',
  'dispose-json'
));