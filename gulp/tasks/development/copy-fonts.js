var config = require('../../config').copyfonts.development;

var gulp   = require('gulp');


gulp.task('vendor:fonts', function() {
  return gulp.src(config.vendor.src)
    .pipe(gulp.dest(config.vendor.dest));
});

// Copy fonts to build folder
gulp.task('copy:fonts', ['vendor:fonts'], function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
