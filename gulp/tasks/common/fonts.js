const config = require('../../config').fonts.vendor;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

gulp.task('fonts:vendor:common', function () {
  return gulp.src(config.src, { allowEmpty: true })
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(gulp.dest(config.dest))
    .pipe(size({ title: 'fonts:vendor:common' }));
});
