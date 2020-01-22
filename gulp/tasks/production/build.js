const gulp = require('gulp');

// Run all tasks needed for a build, in defined order
gulp.task('build:production', function (done) {
  gulp.series(
    'clean:production',
    gulp.parallel(
      'jekyll:production',
      'images:production',
      'sounds:production',
      'fonts:production',
      'styles:production',
      'scripts:production'
    ),
    'base64:production',
    'favicons:production',
    gulp.parallel(
      'optimize:json',
      'optimize:xml',
      'optimize:images',
      'optimize:html',
      'optimize:css',
      'optimize:js'
    ),
    'revision',
    'rev:collect',
    'svgstore:production',
    'garbage:production',
    gulp.parallel(
      'lint-xml',
      'lint-json'
    ),
    done);
});
