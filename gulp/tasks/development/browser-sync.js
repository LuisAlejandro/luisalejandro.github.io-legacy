require('./build');

const config = require('../../config').browsersync.development;

const gulp = require('gulp');
const browsersync = require('browser-sync');

// Run build task and start a server with BrowserSync
gulp.task('browsersync:development', gulp.series('build:development', function (done) {
  browsersync(config);
  done();
}));
