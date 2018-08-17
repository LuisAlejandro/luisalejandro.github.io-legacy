var config  = require('../../config').fonts.development;
var helpers = require('../../util/helpers');

var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');


gulp.task('fonts:vendor:development', function() {
  return gulp.src(config.vendor.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(changed(config.vendor.dest))
    .pipe(gulp.dest(config.vendor.dest));
});

// Copy fonts to build folder
gulp.task('fonts:development', ['fonts:vendor:development'], function() {
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest));
});
