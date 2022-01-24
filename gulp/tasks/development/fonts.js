require('../common/fonts');

const config = require('../../config').fonts.development;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const browsersync = require('browser-sync');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

// Copy fonts to build folder
gulp.task('fonts:development', gulp.series('fonts:vendor:common', function () {
  browsersync.notify('Copying fonts (development)');
  return gulp.src(config.src, { allowEmpty: true })
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(gulp.dest(config.dest))
    .pipe(size({ title: 'fonts:development' }));
}));
