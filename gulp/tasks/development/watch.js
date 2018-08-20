const config = require('../../config').watch;

const gulp = require('gulp');

// Start BrowserSync task,
// watch files for changes,
// and run defined task(s) on file change.
gulp.task('watch:development', ['browsersync:development'], function () {
  gulp.watch(config.jekyll, ['jekyll:development']);
  gulp.watch(config.images, ['images:development']);
  gulp.watch(config.styles, ['styles:development', 'lint:styles:development']);
  gulp.watch(config.scripts, ['scripts:development', 'lint:js:development']);
});
