var config = require('../../config').delete.production;

var gulp = require('gulp');
var del = require('del');

// Delete folders and files, for a clean build
gulp.task('delete:production', function () {
  return del(config.src);
});
