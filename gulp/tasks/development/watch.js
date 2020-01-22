require('./browser-sync');

const config = require('../../config').watch;

const gulp = require('gulp');

// Start BrowserSync task,
// watch files for changes,
// and run defined task(s) on file change.
gulp.task('watch:development',
  gulp.series('browsersync:development', function () {
    global.isWatching = true;
    gulp.watch(config.jekyll, gulp.series('jekyll:rebuild:development'));
    gulp.watch(config.images, gulp.series('images:development'));
    gulp.watch(config.sounds, gulp.series('sounds:development'));
    gulp.watch(config.svg, gulp.series('svgstore:rebuild:development'));
    gulp.watch(config.styles, gulp.series('styles:rebuild:development', 'lint:styles:development'));
    gulp.watch(config.scripts, gulp.series('scripts:development', 'lint:js:development'));
  })
);
