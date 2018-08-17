var log = require('fancy-log');


module.exports = {
  onError: function (err) {
    log(err);
    // Keep gulp from hanging on this task
    this.emit('end');
  }
}
