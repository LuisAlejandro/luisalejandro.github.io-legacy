const config = require('../../config').optimize.json;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const jsonminify = require('gulp-jsonminify');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const size = require('gulp-size');

// Copy and minimize JSON files
gulp.task('optimize:json', function () {
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(changed(config.dest))
    .pipe(jsonminify())
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
