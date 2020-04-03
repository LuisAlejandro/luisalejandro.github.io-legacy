var config = require('../../config').garbage;

var gulp = require('gulp');
var del = require('del');

// Delete folders and files, for a clean build
gulp.task('garbage:production', function () {
  return del(config.src);
});
