const gulp = require('gulp');
const runSequence = require('run-sequence');

// Run all tasks needed for a build, in defined order
gulp.task('build:development', function (done) {
  runSequence(
    'clean:development',
    [
      'jekyll:development',
      'images:development',
      'sounds:development',
      'fonts:development',
      'styles:development',
      'scripts:development'
    ],
    'svgstore:development',
    done);
});
