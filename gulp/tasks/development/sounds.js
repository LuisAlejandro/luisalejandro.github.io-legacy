const config = require('../../config').sounds.development;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

// Copy sounds to build folder
gulp.task('sounds:development', function () {
  return gulp.src(config.src, { allowEmpty: true })
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(gulp.dest(config.dest))
    .pipe(size({ title: 'sounds:development' }));
});
