var config  = require('../../config').libraries;
var helpers = require('../../util/helpers');

var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var cp      = require('child_process');


// Install gems
gulp.task('libraries:gems:common', function(done) {
  return cp.spawn(
    'bundle',
    [
      'install',
      '--path=vendor/bundle'
    ],
    { stdio: 'inherit' })
  .on('close', done);
});


gulp.task('libraries:common', function () {
  return gulp.src(config.src, { base: config.base })
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(changed(config.dest))
    .pipe(gulp.dest(config.dest));
});
