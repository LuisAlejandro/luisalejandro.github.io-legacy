const config = require('../../config').base64;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const base64 = require('gulp-base64');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

// Replace URLs in CSS files with base64 encoded data
gulp.task('base64:production', function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(base64(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size({ title: 'base64:production' }));
});
