require('../common/fonts');

const config = require('../../config').fonts.production;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const browsersync = require('browser-sync');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

// Copy fonts to build folder
gulp.task('fonts:production', gulp.series('fonts:vendor:common', function () {
  browsersync.notify('Copying fonts (production)');
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(gulp.dest(config.dest))
    .pipe(size({title: 'fonts:production'}));
}));
