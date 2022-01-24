require('../common/styles');

const config = require('../../config').styles;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const advancedVariables = require('postcss-advanced-variables');
const presetEnv = require('postcss-preset-env');
const nested = require('postcss-nested');
const mqpacker = require('css-mqpacker');
const browsersync = require('browser-sync');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

// Run CSS through PostCSS and it’s plugins.
// Build sourcemaps and minimize.
gulp.task('styles:production', gulp.series('styles:sass:common', function () {
  browsersync.notify('Transforming CSS with PostCSS (production)');

  // PostCSS plugins
  const processors = [
    advancedVariables(config.options.advancedVariables),
    presetEnv(config.options.presetEnv),
    nested(config.options.nested),
    mqpacker(config.options.mqpacker)
  ];

  return gulp.src(config.production.src, { allowEmpty: true })
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(postcss(processors))
    .pipe(gulp.dest(config.production.dest))
    .pipe(size({ title: 'styles:production' }));
}));
