var config = require('../../config').fonts.production;

var gulp   = require('gulp');


// Copy fonts to build folder
gulp.task('copy:fonts:production', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
