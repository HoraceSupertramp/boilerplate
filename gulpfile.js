const gulp = require('gulp');
const ts = require('gulp-typescript');
const nightwatch = require('gulp-nightwatch');
const del = require('del');

const tsProject = ts.createProject('tsconfig.json');

function clean() {
    return del('./e2e/dist');
}

function test() {
    return gulp.src('./e2e/dist', { read: false }).pipe(
        nightwatch()
    );
}

function compile() {
    return gulp.src(['index.d.ts', 'e2e/**/*.ts'])
        .pipe(tsProject())
        .pipe(gulp.dest('./e2e/dist'))
}

exports.default = gulp.series(compile, test, clean);