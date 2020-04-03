const config = require('../../config').optimize.json;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const jsonminify = require('gulp-jsonminify');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

// Copy and minimize JSON files
gulp.task('optimize:json', function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(jsonminify())
    .pipe(gulp.dest(config.dest))
    .pipe(size({ title: 'optimize:json' }));
});
