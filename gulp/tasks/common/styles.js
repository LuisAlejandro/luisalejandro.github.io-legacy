const config = require('../../config').styles.vendor;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const replace = require('gulp-replace');
const filter = require('gulp-filter');
const plumber = require('gulp-plumber');
const size = require('gulp-size');
const rename = require('gulp-rename');

gulp.task('styles:vendor:common', function () {
  const webfontsfilter = filter(['*/webfonts/**'], { restore: true });
  return gulp.src(config.src, { base: config.base })
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(webfontsfilter)
    .pipe(replace('fonts/roboto/v18/', '../fonts/'))
    .pipe(replace('fonts/oleoscript/v7/', '../fonts/'))
    .pipe(rename('webfonts/webfonts.css'))
    .pipe(webfontsfilter.restore)
    .pipe(gulp.dest(config.dest))
    .pipe(size({ title: 'styles:vendor:common' }));
});
