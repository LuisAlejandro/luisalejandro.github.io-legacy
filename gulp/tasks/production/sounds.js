const config = require('../../config').sounds.production;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

// Copy sounds to build folder
gulp.task('sounds:production', function () {
  return gulp.src(config.src, { allowEmpty: true })
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(gulp.dest(config.dest))
    .pipe(size({ title: 'sounds:production' }));
});
