var config    = require('../../config').lintStyles;
var helpers   = require('../../util/helpers');

var gulp      = require('gulp');
var plumber   = require('gulp-plumber');
var postcss   = require('gulp-postcss');
var stylelint = require('stylelint');
var reporter  = require('postcss-reporter');


// Lint styles
// Executed in watch.js
gulp.task('lint:styles:development', function() {

  // PostCSS plugins
  var processors = [
    stylelint(config.options.stylelint),
    reporter(config.options.reporter)
  ];

  return gulp.src(config.src)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(postcss(processors));
});
