const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('dispose-wxs', () => {
    return gulp.src(['../src/**/*.wxs'])
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('dispose-css', () => {
    return gulp.src(['../src/**/*.less', '!../src/**/_*.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename((path) => {
            path.extname = '.wxss';
        }))
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('dispose-js', () => {
    return gulp.src(['../src/**/*.js'])
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('dispose-json', () => {
    return gulp.src(['../src/**/*.json'])
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('dispose-wxml', () => {
    return gulp.src(['../src/**/*.wxml'])
        .pipe(gulp.dest('../examples/dist/'));
});

// copy
gulp.task('copy', () => {
    return gulp.src('../src/**/image/**')
      .pipe(gulp.dest('../examples/dist/'))
  });

gulp.task('watch', () => {
    gulp.watch('../src/**/*.less', ['dispose-css']);
    gulp.watch('../src/**/*.js', ['dispose-js']);
    gulp.watch('../src/**/*.wxs', ['dispose-wxs']);
    gulp.watch('../src/**/*.json', ['dispose-json']);
    gulp.watch('../src/**/*.wxml', ['dispose-wxml']);
    gulp.watch('../src/**/image/*', ['copy']);
});

gulp.task('default',
    ['dispose-css', 'dispose-js', 'dispose-wxs','dispose-json', 'dispose-wxml', 'copy', 'watch']);