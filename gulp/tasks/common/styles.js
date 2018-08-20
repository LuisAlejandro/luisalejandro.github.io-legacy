var config = require('../../config').styles.vendor;
var helpers = require('../../util/helpers');

var gulp = require('gulp');
var replace = require('gulp-replace');
var filter = require('gulp-filter');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');

gulp.task('styles:vendor:common', function () {
  const robotofilter = filter(['*/roboto-fontface/css/roboto/**'], {
    restore: true
  });
  return gulp
    .src(config.src, {
      base: config.base
    })
    .pipe(plumber({
      errorHandler: helpers.onError
    }))
    .pipe(changed(config.dest))
    .pipe(robotofilter)
    .pipe(replace("url('../../fonts/roboto", "url('../fonts"))
    .pipe(robotofilter.restore)
    .pipe(gulp.dest(config.dest));
});
