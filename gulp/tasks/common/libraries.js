const config = require('../../config').libraries.fonts;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const cp = require('child_process');
const plumber = require('gulp-plumber');
const size = require('gulp-size');
const path = require('path');
const fs = require('fs');
const del = require('del');
const flatten = require('gulp-flatten');

// Install gems
gulp.task('libraries:gems:common', function (done) {
  return cp.spawn(
    'bundle',
    [
      'install',
      '--path=vendor/bundle'
    ],
    { stdio: 'inherit' })
    .on('close', done);
});

// Download fonts
gulp.task('libraries:fonts:common:download', function (done) {
  const fontliststr = config.webfonts.join('|');
  return cp.spawn(
    'npx',
    [
      'google-font-downloader',
      'https://fonts.googleapis.com/css?family=' + fontliststr
    ],
    { stdio: 'inherit' })
    .on('close', done);
});

gulp.task('libraries:fonts:common', gulp.series('libraries:fonts:common:download', function (done) {
  const dummyJsonPath = path.join(config.dest, 'package.json');
  const dummyJson = {
    name: 'webfonts',
    version: '1.0.0'
  };

  if (fs.existsSync(dummyJsonPath)) {
    del(config.dest);
  }

  if (!fs.existsSync(config.dest)) {
    fs.mkdirSync(config.dest, 0o755);
  }

  fs.writeFileSync(dummyJsonPath, JSON.stringify(dummyJson));

  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(flatten())
    .pipe(gulp.dest(config.dest))
    .pipe(size({ title: 'libraries:fonts:common' }))
    .on('end', function () {
      del(config.clean);
      done();
    });
}));
