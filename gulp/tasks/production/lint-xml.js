const config = require('../../config').lintXml;

const gulp = require('gulp');
const xmllint = require('gulp-xml-validator');

// Lint optimized JSON files
gulp.task('lint-xml', function () {
  return gulp.src(config.src)
    .pipe(xmllint());
});
