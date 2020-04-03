require('./clean');
require('./jekyll');
require('./images');
require('./sounds');
require('./fonts');
require('./styles');
require('./scripts');
require('./svgstore');

const gulp = require('gulp');

// Run all tasks needed for a build, in defined order
gulp.task('build:development',
  gulp.series(
    'clean:development',
    gulp.parallel(
      'jekyll:development',
      'images:development',
      'sounds:development',
      'fonts:development',
      'styles:development',
      'scripts:development'
    ),
    'svgstore:development'
  )
);
