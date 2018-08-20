const config = require('../../config').scripts.development;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const browsersync = require('browser-sync');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const watchify = require('watchify');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
const size = require('gulp-size');

// Run JavaScript through Browserify
gulp.task('scripts:development', function () {
  browsersync.notify('Compiling JavaScript (development)');

  const buildScripts = function (item) {
    const bundle = function (bundler) {
      return bundler
        .bundle()
        // Use vinyl-source-stream to make the
        // stream gulp compatible. Specifiy the
        // desired output filename here.
        .pipe(source(item.outputName))
        .pipe(buffer())
        // Report compile errors
        .pipe(plumber({errorHandler: helpers.onError}))
        .pipe(changed(item.dest))
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        // Specify the output destination
        .pipe(gulp.dest(item.dest))
        .pipe(size());
    };

    config.options.entries = item.entries;
    config.options.plugin = [watchify];
    const bundler = browserify(config.options);
    bundler.on('update', function () {
      bundle(bundler);
    });

    return bundle(bundler);
  };

  // Start bundling with Browserify for each item specified
  config.bundles.forEach(buildScripts);
});
