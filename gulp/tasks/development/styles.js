const config = require('../../config').styles;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const advancedVariables = require('postcss-advanced-variables');
const presetEnv = require('postcss-preset-env');
const nested = require('postcss-nested');
const mqpacker = require('css-mqpacker');
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require('browser-sync');
const plumber = require('gulp-plumber');
const size = require('gulp-size');
const runSequence = require('run-sequence');

// Run CSS through PostCSS and it’s plugins.
// Build sourcemaps and minimize.
gulp.task('styles:development', function (done) {
  runSequence(
    'styles:sass:common',
    'styles:rebuild:development',
    done);
});

gulp.task('styles:rebuild:development', function () {
  browsersync.notify('Transforming CSS with PostCSS (development)');

  // PostCSS plugins
  const processors = [
    advancedVariables(config.options.advancedVariables),
    presetEnv(config.options.presetEnv),
    nested(config.options.nested),
    mqpacker(config.options.mqpacker)
  ];

  return gulp.src(config.development.src)
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.development.dest))
    .pipe(size({ title: 'styles:development' }));
});
