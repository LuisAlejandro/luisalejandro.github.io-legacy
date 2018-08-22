var config = require('../../config').clean.development;

var gulp = require('gulp');
var del = require('del');

// Delete folders and files, for a clean build
gulp.task('clean:development', function () {
  return del(config.src);
});
