const config = require('../../config').sass;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');

gulp.task('styles:sass:common', ['styles:vendor:common'], function () {
  return gulp
    .src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(changed(config.dest))
    .pipe(sass())
    .pipe(gulp.dest(config.dest));
});
