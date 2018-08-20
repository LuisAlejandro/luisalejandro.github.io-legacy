const config = require('../../config').browsersync.production;

const gulp = require('gulp');
const browsersync = require('browser-sync');

// Run production build task and start a server with BrowserSync
gulp.task('browsersync:production', ['build:production'], function () {
  browsersync(config);
});
