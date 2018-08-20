const gulp = require('gulp');
const cp = require('child_process');

// Install gems
gulp.task('libraries:gems:common', function (done) {
  return cp.spawn(
    'bundle',
    [
      'install',
      '--path=vendor/bundle'
    ],
    {stdio: 'inherit'})
    .on('close', done);
});
