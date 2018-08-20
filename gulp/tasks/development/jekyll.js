const config = require('../../config').jekyll.development;

const gulp = require('gulp');
const cp = require('child_process');
const browsersync = require('browser-sync');
const util = require('util');

// Build Jekyll site
gulp.task('jekyll:development', function (done) {
  browsersync.notify('Compiling Jekyll (development)');

  return cp.spawn(
    'bundle',
    [
      'exec',
      'jekyll',
      'build',
      util.format('--source=%s', config.src),
      util.format('--destination=%s', config.dest),
      util.format('--config=%s', config.config),
      config.option
    ],
    { stdio: 'inherit' })
    .on('close', done);
});
