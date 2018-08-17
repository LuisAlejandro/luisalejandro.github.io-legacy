var config  = require('../../config').base64;
var helpers = require('../../util/helpers');

var gulp    = require('gulp');
var base64  = require('gulp-base64');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');


// Replace URLs in CSS files with base64 encoded data
gulp.task('base64:development', ['styles:development'], function() {
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(changed(config.dest))
    .pipe(base64(config.options))
    .pipe(gulp.dest(config.dest));
});
