var config            = require('../../config').styles;

var gulp              = require('gulp');
var postcss           = require('gulp-postcss');
var advancedVariables = require('postcss-advanced-variables');
var presetEnv         = require('postcss-preset-env');
var nested            = require('postcss-nested');
var mqpacker          = require('css-mqpacker');
var cssnano           = require('cssnano');
var plumber           = require('gulp-plumber');
var sourcemaps        = require('gulp-sourcemaps');
var browsersync       = require('browser-sync');
var replace           = require('gulp-replace');
var filter            = require('gulp-filter');

function onError(err) {
  console.log(err);
  // Keep gulp from hanging on this task
  this.emit('end');
}

gulp.task('vendor:styles', function() {
  const robotofilter = filter(['*/roboto-fontface/css/roboto/**'], {restore: true});
  return gulp.src(config.vendor.src)
    .pipe(robotofilter)
    .pipe(replace("url('../../fonts/roboto", "url('../fonts"))
    .pipe(robotofilter.restore)
    .pipe(gulp.dest(config.vendor.dest));
});


// Run CSS through PostCSS and it’s plugins.
// Build sourcemaps and minimize.
gulp.task('styles', ['vendor:styles'], function() {
  browsersync.notify('Transforming CSS with PostCSS');

  // PostCSS plugins
  var processors = [
    advancedVariables(config.options.advancedVariables),
    presetEnv(config.options.presetEnv),
    nested(config.options.nested),
    mqpacker(config.options.mqpacker),
  ];

  return gulp.src(config.src)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest));
});
