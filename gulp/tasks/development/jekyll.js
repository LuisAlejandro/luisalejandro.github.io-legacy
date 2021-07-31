require('./svgstore');

const config = require('../../config').jekyll.development;

const gulp = require('gulp');
const cp = require('child_process');
const browsersync = require('browser-sync');
const util = require('util');

gulp.task('jekyll:development', function (done) {
  browsersync.notify('Compiling Jekyll (development)');
  cp.spawnSync(
    'bundle',
    [
      'exec',
      'jekyll',
      'build',
      util.format('--config=%s', config.config),
      config.option
    ],
    { stdio: 'inherit' }
  );
  done();
});

// Build Jekyll site
gulp.task('jekyll:rebuild:development',
  gulp.series(
    'jekyll:development',
    'svgstore:development'
  )
);
