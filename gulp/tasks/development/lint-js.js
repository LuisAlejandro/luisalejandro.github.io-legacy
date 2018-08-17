var config  = require('../../config').lintJs;
var helpers = require('../../util/helpers');

var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');


// Lint JavaScript
// Executed by watch task
gulp.task('lint:js:development', function() {
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
