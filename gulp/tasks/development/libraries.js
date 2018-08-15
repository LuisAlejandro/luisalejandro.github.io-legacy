var gulp = require('gulp');
var config = require('../../config').libraries;

gulp.task("libraries", function () {
  return gulp.src(config.src, { base: config.base })
    .pipe(gulp.dest(config.dest));
});
