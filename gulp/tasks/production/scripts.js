const config = require('../../config').scripts.production;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const browsersync = require('browser-sync');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const plumber = require('gulp-plumber');
const size = require('gulp-size');
const util = require('util');

// Run JavaScript through Browserify
gulp.task('scripts:production', function (done) {
  browsersync.notify('Compiling JavaScript (production)');

  const buildScripts = function (item) {
    config.options.entries = item.entries;
    return browserify(config.options)
      .bundle()
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      .pipe(source(item.outputName))
      .pipe(buffer())
      // Report compile errors
      .pipe(plumber({ errorHandler: helpers.onError }))
      // Specify the output destination
      .pipe(gulp.dest(item.dest))
      .pipe(size({ title: util.format('scripts:production %s', item.outputName) }));
  };

  // Start bundling with Browserify for each item specified
  config.bundles.forEach(buildScripts);
  done();
});
