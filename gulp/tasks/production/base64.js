const config = require('../../config').base64;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const base64 = require('gulp-base64');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const size = require('gulp-size');

// Replace URLs in CSS files with base64 encoded data
gulp.task('base64:production', function () {
  return gulp.src(config.production.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(changed(config.production.dest))
    .pipe(base64(config.options))
    .pipe(gulp.dest(config.production.dest))
    .pipe(size());
});
