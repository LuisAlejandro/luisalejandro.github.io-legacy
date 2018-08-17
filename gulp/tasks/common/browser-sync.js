var gulp        = require('gulp');
var browsersync = require('browser-sync');

// Reload task, that is used by jekyll-rebuild
gulp.task('browsersync:reload', function() {
  browsersync.reload();
});
