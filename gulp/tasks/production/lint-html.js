const config = require('../../config').lintHtml;
const helpers = require('../../util/helpers');

const gulp = require('gulp');
const htmllint = require('gulp-htmllint');

// Lint optimized JSON files
gulp.task('lint-html', function () {
  return gulp.src(config.src)
    .pipe(htmllint({}, helpers.htmllintReporter));
});
