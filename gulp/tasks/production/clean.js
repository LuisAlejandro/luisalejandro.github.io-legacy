var config = require('../../config').clean.production;

var gulp = require('gulp');
var del = require('del');

// Delete folders and files, for a clean build
gulp.task('clean:production', function () {
  return del(config.src);
});
