const config = require('../../config').lintJs;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const eslint = require('gulp-eslint');

// Lint JavaScript
// Executed by watch task
gulp.task('lint:js:development', function () {
  return gulp.src(config.src, { allowEmpty: true })
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(eslint())
    .pipe(eslint.format());
});
