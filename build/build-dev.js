const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('compile-wxs', () => {
    return gulp.src(['../src/**/*.wxs'])
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('compile-css', () => {
    return gulp.src(['../src/**/*.less', '!../src/**/_*.less'])
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename((path) => {
            path.extname = '.wxss';
        }))
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('compile-js', () => {
    return gulp.src(['../src/**/*.js'])
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('compile-json', () => {
    return gulp.src(['../src/**/*.json'])
        .pipe(gulp.dest('../examples/dist/'));
});

gulp.task('compile-wxml', () => {
    return gulp.src(['../src/**/*.wxml'])
        .pipe(gulp.dest('../examples/dist/'));
});

// copy
gulp.task('copy', () => {
    return gulp.src('../src/**/image/**')
      .pipe(gulp.dest('../examples/dist/'))
  });

gulp.task('auto', () => {
    gulp.watch('../src/**/*.less', ['compile-css']);
    gulp.watch('../src/**/*.js', ['compile-js']);
    gulp.watch('../src/**/*.wxs', ['compile-wxs']);
    gulp.watch('../src/**/*.json', ['compile-json']);
    gulp.watch('../src/**/*.wxml', ['compile-wxml']);
    gulp.watch('../src/**/image/*', ['copy']);
});

gulp.task('default',
    ['compile-css', 'compile-js', 'compile-wxs','compile-json', 'compile-wxml', 'copy', 'auto']);
