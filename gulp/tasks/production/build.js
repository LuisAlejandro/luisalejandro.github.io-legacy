const gulp = require('gulp');
const runSequence = require('run-sequence');

// Run all tasks needed for a build, in defined order
gulp.task('build:production', function (done) {
  runSequence(
    'delete:production',
    [
      'jekyll:production',
      'images:production',
      'fonts:production',
      'styles:production',
      'scripts:production'
    ],
    'base64:production',
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
    [
      'lint-xml',
      'lint-json'
    ],
    done);
});
