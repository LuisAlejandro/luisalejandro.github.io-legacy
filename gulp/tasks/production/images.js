const config = require('../../config').images.production;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const size = require('gulp-size');

// Copy images to build folder
gulp.task('images:production', function () {
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
