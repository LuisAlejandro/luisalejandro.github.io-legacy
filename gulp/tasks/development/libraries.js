var gulp = require('gulp');
var gwf = require('gulp-google-webfonts');
var config = require('../../config').libraries;
var gwfconfig = require('../../config').googlefonts;

gulp.task('googlefonts', function () {
  return gulp.src(gwfconfig.config)
    .pipe(gwf())
    .pipe(gulp.dest(gwfconfig.dest));
});

gulp.task("libraries", ["googlefonts"], function () {
  return gulp.src(config.src, { base: config.base })
    .pipe(gulp.dest(config.dest));
});
