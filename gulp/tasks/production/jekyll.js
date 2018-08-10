var config      = require('../../config').jekyll.production;

var gulp        = require('gulp');
var cp          = require('child_process');
var browsersync = require('browser-sync');


// Build Jekyll site
gulp.task('jekyll:production', function(done) {
  browsersync.notify('Compiling Jekyll (Production)');

  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q', '--source=' + config.src, '--destination=' + config.dest, '--config=' + config.config], { stdio: 'inherit' })
  .on('close', done);
});
