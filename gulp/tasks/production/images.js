const config = require('../../config').images.production;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

// Copy images to build folder
gulp.task('images:production', function () {
  return gulp.src(config.src, { allowEmpty: true })
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(gulp.dest(config.dest))
    .pipe(size({ title: 'images:production' }));
});
