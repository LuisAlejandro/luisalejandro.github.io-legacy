const config = require('../../config').scripts.production;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const browsersync = require('browser-sync');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const size = require('gulp-size');

// Run JavaScript through Browserify
gulp.task('scripts:production', function () {
  browsersync.notify('Compiling JavaScript (production)');

  const buildScripts = function (item) {
    config.options.entries = item.entries;
    return browserify(config.options)
      .bundle()
      .pipe(uglify())
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      .pipe(source(item.outputName))
      .pipe(buffer())
      // Report compile errors
      .pipe(plumber({errorHandler: helpers.onError}))
      .pipe(changed(item.dest))
      // Specify the output destination
      .pipe(gulp.dest(item.dest))
      .pipe(size());
  };

  // Start bundling with Browserify for each item specified
  config.bundles.forEach(buildScripts);
});
