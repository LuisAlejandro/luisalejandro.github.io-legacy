var config = require('../../config').delete.development;

var gulp = require('gulp');
var del = require('del');

// Delete folders and files, for a clean build
gulp.task('delete:development', function () {
  return del(config.src);
});
