const config = require('../../config').clean.development;

const gulp = require('gulp');
const del = require('del');

// Delete folders and files, for a clean build
gulp.task('clean:development', function () {
  return del(config.src);
});
