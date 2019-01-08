const gulp = require('gulp');
const fs = require('fs');
const less = require('gulp-less');
const cssmin = require('gulp-clean-css');
const rename = require('gulp-rename');
// const child_process = require('child_process');

// function copyDir(src, dist) {
//     child_process.spawn('cp', ['-r', src, dist]);
// }

// less => wxss
gulp.task('compile-wxss', () => {
    fs.readFile('../config/component.json', (err, data) => {
        const params = JSON.parse(data)
        const path = params.extends.length ? '../src/{' + getComponent(params.extends).join() + '}/*.less' : '../src/**/*.less',
            remainPath = params.extends.length ? '!../src/{' + getComponent(params.extends).join() + '}/_*.less' : '!../src/**/_*.less';
        return gulp.src([path, remainPath])
            .pipe(less())
            .pipe(cssmin())
            .pipe(rename((path) => {
                path.extname = '.wxss';
            }))
            .pipe(gulp.dest('../dist/'));
    })
});

// js => js
gulp.task('compile-js', () => {
    fs.readFile('../config/component.json', (err, data) => {
        const params = JSON.parse(data)
        const path = params.extends.length ? '../src/{' + getComponent(params.extends).join() + '}/*.js' : '../src/**/*.js'

        return gulp.src(path)
            .pipe(gulp.dest('../dist/'));
    })
});

// wxs => wxs
gulp.task('compile-wxs', () => {
    fs.readFile('../config/component.json', (err, data) => {
        const params = JSON.parse(data)
        const path = params.extends.length ? '../src/{' + getComponent(params.extends).join() + '}/*.wxs' : '../src/**/*.wxs'

        return gulp.src(path)
            .pipe(gulp.dest('../dist/'));
    })
});

// json => json
gulp.task('compile-json', () => {
    fs.readFile('../config/component.json', (err, data) => {
        const params = JSON.parse(data)
        const path = params.extends.length ? '../src/{' + getComponent(params.extends).join() + '}/*.json' : '../src/**/*.json'
        return gulp.src(path)
            .pipe(gulp.dest('../dist/'));
    })
});

// wxml => wxml
gulp.task('compile-wxml', () => {
    fs.readFile('../config/component.json', (err, data) => {
        const params = JSON.parse(data)
        const path = params.extends.length ? '../src/{' + getComponent(params.extends).join() + '}/*.wxml' : '../src/**/*.wxml'
        return gulp.src(path)
            .pipe(gulp.dest('../dist/'));
    })
});

// get usingComponents
const getComponent = (arr) => {
    let newArr = []
    newArr = arr.map((item) => {
        let data = fs.readFileSync(`../src/${item}/index.json`, 'utf-8')
        const params = JSON.parse(data)
        const usingComponents = params.usingComponents
        if (usingComponents) {
            if (!isEmptyObj(usingComponents)) {
                let usingArr = []
                for (let key in usingComponents) {
                    usingArr[usingArr.length] = key
                }
                return usingArr
            }
        }
    })
    newArr = [...new Set([...arr, ...newArr[0]])];
    return newArr
}

// Judging object is empty
const isEmptyObj = (obj) => {
    var result = (JSON.stringify(obj) === "{}");
    return result
}

gulp.task('default', ['compile-js', 'compile-json', 'compile-wxml', 'compile-wxss','compile-wxs']);



