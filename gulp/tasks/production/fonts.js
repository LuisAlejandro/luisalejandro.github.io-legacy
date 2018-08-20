const config = require('../../config').fonts.production;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const browsersync = require('browser-sync');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const size = require('gulp-size');

// Copy fonts to build folder
gulp.task('fonts:production', ['fonts:vendor:common'], function () {
  browsersync.notify('Copying fonts (production)');
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
