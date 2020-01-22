const config = require('../../config').revision;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const rev = require('gulp-rev');
const plumber = require('gulp-plumber');

// Revision all asset files and write a manifest file
gulp.task('revision', function () {
  return gulp.src(config.src.assets, { base: config.src.base })
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(gulp.dest(config.dest.assets))
    .pipe(rev())
    .pipe(gulp.dest(config.dest.assets))
    .pipe(rev.manifest({ path: config.dest.manifest.name }))
    .pipe(gulp.dest(config.dest.manifest.path));
});
