var gulp = require('gulp');
var runSequence = require('run-sequence');


// Run all tasks needed for a build, in defined order
gulp.task('build:production', function (callback) {
  runSequence(
    'delete:production',
    'libraries:common', [
      'jekyll:production',
      'styles:production',
      'scripts:production',
      'images:production',
      'fonts:production'
    ],
    'base64:production', [
      'copy:css',
      'optimize:js',
      'optimize:json',
      'optimize:xml',
      'optimize:images',
      'optimize:html',
      'copy:fonts:production'
    ], [
      'optimize:css',
      'lint-json'
    ],
    'revision',
    'rev:collect',
    callback);
});
