var config = require('../../config').watch;

var gulp   = require('gulp');


// Start BrowserSync task,
// watch files for changes,
// and run defined task(s) on file change.
gulp.task('watch:development', ['browsersync:development'], function() {

  gulp.watch(config.jekyll,  ['jekyll:rebuild:development']);

  gulp.watch(config.styles,  ['styles:development', 'lint:styles:development']);

  gulp.watch(config.scripts, ['scripts:development', 'lint:js:development']);

  gulp.watch(config.vue,     ['scripts:development', 'lint:js:development']);

  gulp.watch(config.images,  ['images:development']);

  gulp.watch(config.package, ['libraries:common', 'scripts:development']);
});
