const config = require('../../config').optimize.css;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const uncss = require('postcss-uncss');
const discardComments = require('postcss-discard-comments');
const cssnano = require('cssnano');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

// Optimize css files
gulp.task('optimize:css', function () {
  // PostCSS plugins
  const processors = [
    discardComments(config.options.discardComments),
    uncss(config.options.uncss),
    cssnano(config.options.cssnano)
  ];

  return gulp.src(config.src, { allowEmpty: true })
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(postcss(processors))
    .pipe(gulp.dest(config.dest))
    .pipe(size({ title: 'optimize:css' }));
});
