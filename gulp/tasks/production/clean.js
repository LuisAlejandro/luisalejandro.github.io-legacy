const config = require('../../config').clean.production;

const gulp = require('gulp');
const del = require('del');

// Delete folders and files, for a clean build
gulp.task('clean:production', function () {
  return del(config.src);
});
