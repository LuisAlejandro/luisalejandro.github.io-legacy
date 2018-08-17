var config  = require('../../config').sass;
var helpers = require('../../util/helpers');

var gulp    = require('gulp');
var sass    = require('gulp-sass');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');


gulp.task('styles:sass:common', ['libraries:common', 'styles:vendor:common'], function() {
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(changed(config.dest))
    .pipe(sass())
    .pipe(gulp.dest(config.dest));
});
