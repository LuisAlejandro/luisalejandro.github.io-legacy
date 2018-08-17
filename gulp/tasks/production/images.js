var config  = require('../../config').images;
var helpers = require('../../util/helpers');

var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');


// Copy images to build folder
gulp.task('images:production', function() {
  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest));
});
