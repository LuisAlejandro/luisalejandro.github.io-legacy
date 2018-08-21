const config = require('../../config').watch;

const gulp = require('gulp');

// Start BrowserSync task,
// watch files for changes,
// and run defined task(s) on file change.
gulp.task('watch:development', ['browsersync:development'], function (done) {
  global.isWatching = true;
  gulp.watch(config.jekyll, ['jekyll:rebuild:development']);
  gulp.watch(config.images, ['images:development']);
  gulp.watch(config.styles, ['styles:rebuild:development', 'lint:styles:development']);
  gulp.watch(config.scripts, ['scripts:development', 'lint:js:development']);
  done();
});
