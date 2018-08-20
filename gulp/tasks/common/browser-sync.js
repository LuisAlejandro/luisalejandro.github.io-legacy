const gulp = require('gulp');
const browsersync = require('browser-sync');

// Reload task, that is used by jekyll-rebuild
gulp.task('browsersync:reload:common', function () {
  browsersync.reload();
});
