const config = require('../../config').optimize.js;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const size = require('gulp-size');

// Optimize js files
gulp.task('optimize:js', function () {
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest))
    .pipe(size({title: 'optimize:js'}));
});
