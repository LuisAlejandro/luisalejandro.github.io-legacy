const gulp = require('gulp');
const runSequence = require('run-sequence');

// Run all tasks needed for a build, in defined order
gulp.task('build:production', function (done) {
  runSequence(
    'clean:production',
    [
      'jekyll:production',
      'images:production',
      'fonts:production',
      'styles:production',
      'scripts:production'
    ],
    'base64:production',
    'favicons:production',
    [
      'optimize:json',
      'optimize:xml',
      'optimize:images',
      'optimize:html',
      'optimize:css',
      'optimize:js'
    ],
    'revision',
    'rev:collect',
    'svgstore:production',
    [
      'lint-xml',
      'lint-json'
    ],
    done);
});
