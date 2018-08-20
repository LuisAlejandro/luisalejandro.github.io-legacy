const config = require('../../config').styles;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const advancedVariables = require('postcss-advanced-variables');
const presetEnv = require('postcss-preset-env');
const nested = require('postcss-nested');
const uncss = require('postcss-uncss');
const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');
const browsersync = require('browser-sync');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const size = require('gulp-size');

// Run CSS through PostCSS and it’s plugins.
// Build sourcemaps and minimize.
gulp.task('styles:production', ['styles:sass:common'], function () {
  browsersync.notify('Transforming CSS with PostCSS (production)');

  // PostCSS plugins
  const processors = [
    advancedVariables(config.options.advancedVariables),
    presetEnv(config.options.presetEnv),
    nested(config.options.nested),
    mqpacker(config.options.mqpacker),
    uncss(config.options.uncss),
    cssnano(config.options.cssnano)
  ];

  return gulp
    .src(config.production.src)
    .pipe(plumber({
      errorHandler: helpers.onError
    }))
    .pipe(changed(config.production.dest))
    .pipe(postcss(processors))
    .pipe(gulp.dest(config.production.dest))
    .pipe(size());
});
