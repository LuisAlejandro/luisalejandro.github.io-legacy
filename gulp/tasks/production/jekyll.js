const config = require('../../config').jekyll.production;

const gulp = require('gulp');
const cp = require('child_process');
const browsersync = require('browser-sync');
const util = require('util');

// Build Jekyll site
gulp.task('jekyll:production', function (done) {
  browsersync.notify('Compiling Jekyll (production)');

  return cp
    .spawn(
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
