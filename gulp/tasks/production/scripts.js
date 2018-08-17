var config       = require('../../config').scripts;
var helpers      = require('../../util/helpers');
var bundleLogger = require('../../util/bundleLogger');

var gulp         = require('gulp');
var browsersync  = require('browser-sync');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var watchify     = require('watchify');
var plumber      = require('gulp-plumber');
var changed      = require('gulp-changed');


// Run JavaScript through Browserify
gulp.task('scripts:production', function(callback) {
  var bundleQueue, bundlefy;

  browsersync.notify('Compiling JavaScript');

  bundleQueue = config.bundles.length;

  bundlefy = function(item) {
    var bundler, bundle, reportFinished;

    config.options.entries = item.entries;
    bundler = browserify(config.options);

    bundle = function() {
      // Log when bundling starts
      bundleLogger.start(item.outputName);

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
        // Specify the output destination
        .pipe(gulp.dest(item.dest))
        .on('finish', reportFinished);
    };

    if(global.isWatching) {
      // Wrap with watchify and rebundle on changes
      bundler = watchify(bundler);
      // Rebundle on update
      bundler.on('update', bundle);
    }

    reportFinished = function() {
      // Log when bundling completes
      bundleLogger.end(item.outputName)

      if(bundleQueue) {
        bundleQueue--;
        if(bundleQueue === 0) {
          // If queue is empty, tell gulp the task is complete.
          // https://github.com/gulpjs/gulp/blob/master/docs/API.md#accept-a-callback
          callback();
        }
      }
    };

    return bundle();
  };

  // Start bundling with Browserify for each item specified
  config.bundles.forEach(bundlefy);
});
