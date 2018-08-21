const config = require('../../config').optimize.html;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

// Minimize and optimize HTML,
// to strip whitespace (e.g. between <li>).
gulp.task('optimize:html', function () {
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(htmlmin(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size({title: 'optimize:html'}));
});
