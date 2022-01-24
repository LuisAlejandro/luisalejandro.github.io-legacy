const config = require('../../config').garbage;

const gulp = require('gulp');
const del = require('del');

// Delete folders and files, for a clean build
gulp.task('garbage:production', async function () {
  return del(config.src);
});
