const log = require('fancy-log');
const colors = require('ansi-colors');
const util = require('util');

module.exports = {
  onError: function (err) {
    log(err);
    // Keep gulp from hanging on this task
    this.emit('end');
  },
  htmllintReporter: function (filepath, issues) {
    if (issues.length > 0) {
      issues.forEach(function (issue) {
        log(util.format('%s %s: %s',
          colors.cyan('[gulp-htmllint]'),
          colors.white(util.format('%s [%s, %s]', filepath, issue.line, issue.column)),
          colors.red(util.format('(%s) %s', issue.code, issue.msg))
        ));
      });
    }
  }
};
