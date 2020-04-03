const config = require('../../config').svgstore.production;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const svgstore = require('gulp-svgstore');
const inject = require('gulp-inject');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

gulp.task('svgstore:production', function () {
  const svgs = gulp.src(config.svgs)
    .pipe(svgstore({ inlineSvg: true }));

  function fileContents (filePath, file) {
    return file.contents.toString();
  }

  return gulp.src(config.src)
    .pipe(plumber({ errorHandler: helpers.onError }))
    .pipe(inject(svgs, { transform: fileContents, name: 'svgstore' }))
    .pipe(gulp.dest(config.dest))
    .pipe(size({ title: 'svgstore:production' }));
});
