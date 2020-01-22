const config = require('../../config').collect;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const collect = require('gulp-rev-collector');
const plumber = require('gulp-plumber');

// Replace all links to asset files via a manifest file
gulp.task('rev:collect', function () {
  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(collect())
    .pipe(gulp.dest(config.dest));
});
