const gulp = require('gulp');
const ts = require('gulp-typescript');
const child_process = require('child_process');

function runTest(cb) {
    child_process.exec('nightwatch --headless', (err, stdout, stderr) => {
        console.log(stdout);
        console.error(stderr);
        cb(err);
    });
}

function compileTest() {
    return gulp.src(['index.d.ts', 'e2e/**/*.ts'])
        .pipe(ts.createProject('tsconfig.json')())
        .pipe(gulp.dest('./build/e2e'));
}

exports.test = gulp.series(compileTest, runTest);