require('./styles');

const config = require('../../config').sass;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

gulp.task('styles:sass:common', gulp.series('styles:vendor:common', function () {
  return gulp.src(config.src, { allowEmpty: true })
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(sass())
    .pipe(gulp.dest(config.dest));
}));
