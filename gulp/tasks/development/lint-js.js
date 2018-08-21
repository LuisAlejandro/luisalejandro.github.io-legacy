var config = require('../../config').lintJs;
var helpers = require('../../util/helpers');

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');

// Lint JavaScript
// Executed by watch task
gulp.task('lint:js:development', function () {
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(eslint())
    .pipe(eslint.format());
});
