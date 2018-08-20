const config = require('../../config').optimize.xml;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const prettydata = require('gulp-pretty-data');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const size = require('gulp-size');

// Copy and minimize XML files
gulp.task('optimize:xml', function () {
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(changed(config.dest))
    .pipe(prettydata(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
