var gulp = require('gulp');
var runSequence = require('run-sequence');


// Run all tasks needed for a build, in defined order
gulp.task('build:development', function (callback) {
  runSequence(
    'delete:development',
    'libraries:common', [
      'jekyll:development',
      'styles:development',
      'scripts:development',
      'images:development',
      'fonts:development'
    ],
    'base64:development',
    callback);
});
