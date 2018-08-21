var config = require('../../config').browsersync.development;

var gulp = require('gulp');
var browsersync = require('browser-sync');

// Run build task and start a server with BrowserSync
gulp.task('browsersync:development', ['build:development'], function (done) {
  browsersync(config);
  done();
});
