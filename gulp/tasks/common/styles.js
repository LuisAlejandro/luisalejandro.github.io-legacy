var config = require('../../config').styles;
var helpers = require('../../util/helpers');

var gulp = require('gulp');
var replace = require('gulp-replace');
var filter = require('gulp-filter');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');


gulp.task('styles:vendor:common', ['libraries:common'], function () {
  const robotofilter = filter(['*/roboto-fontface/css/roboto/**'], {
    restore: true
  });
  return gulp.src(config.vendor.src, {
      base: config.vendor.base
    })
    .pipe(plumber({
      errorHandler: helpers.onError
    }))
    .pipe(changed(config.vendor.dest))
    .pipe(robotofilter)
    .pipe(replace("url('../../fonts/roboto", "url('../fonts"))
    .pipe(robotofilter.restore)
    .pipe(gulp.dest(config.vendor.dest));
});
