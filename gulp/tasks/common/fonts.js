const config = require('../../config').fonts.vendor;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const size = require('gulp-size');

gulp.task('fonts:vendor:common', function () {
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
