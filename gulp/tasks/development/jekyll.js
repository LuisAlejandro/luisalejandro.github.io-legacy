var config      = require('../../config').jekyll.development;

var gulp        = require('gulp');
var cp          = require('child_process');
var browsersync = require('browser-sync');
var runSequence = require('run-sequence');


// Build Jekyll site
gulp.task('jekyll:development', function(done) {
  browsersync.notify('Compiling Jekyll');

  return cp.spawn(
    'bundle',
    [
      'exec',
      'jekyll',
      'build',
      '--source=' + config.src,
      '--destination=' + config.dest,
      '--config=' + config.config,
      config.option
    ],
    { stdio: 'inherit' })
  .on('close', done);
});

// Rebuild Jekyll site
gulp.task('jekyll:rebuild:development', function(callback) {
  runSequence('jekyll:development', 'browsersync:reload', callback);
});
