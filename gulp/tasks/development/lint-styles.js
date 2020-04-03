const config = require('../../config').lintStyles;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');

// Lint styles
// Executed in watch.js
gulp.task('lint:styles:development', function () {
  // PostCSS plugins
  const processors = [
    stylelint(config.options.stylelint),
    reporter(config.options.reporter)
  ];

  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(postcss(processors));
});
