const gulp = require('gulp');
const runSequence = require('run-sequence');

// Run all tasks needed for a build, in defined order
gulp.task('build:development', function (done) {
  runSequence(
    'delete:development',
    [
      'jekyll:development',
      'images:development',
      'fonts:development',
      'styles:development',
      'scripts:development'
    ],
    done);
});
