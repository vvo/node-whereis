var exec = require('child_process').exec;

module.exports = function whereis(name, cb) {
  exec('which ' + name, function(error, stdout, stderr) {
    if (error || stderr || stdout === '' || stdout.charAt(0) !== '/') {
      exec('whereis ' + name, function(error, stdout, stderr) {
        if (error || stderr || stdout === '' || stdout.indexOf('/') === -1) {
          return cb(new Error('Could not find ' + name + ' or system not supported'));
        }

        return cb(null, stdout.split(' ')[1]);
      });
    } else {
      return cb(null, stdout);
    }
  });
};

