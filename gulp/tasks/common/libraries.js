const config = require('../../config').libraries.fonts;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const cp = require('child_process');
const webfonts = require('gulp-google-webfonts');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

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

gulp.task('libraries:fonts:common', function (done) {
  return gulp.src(config.webfontslist)
    .pipe(plumber({errorHandler: helpers.onError}))
    .pipe(webfonts(config.webfontsconfig))
    .pipe(gulp.dest(config.dest))
    .pipe(size({title: 'libraries:fonts:common'}));
});
