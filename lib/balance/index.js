var cluster = require('cluster');
var os = require('os');

module.exports = function balance(init) {
  return cluster.isMaster? initMaster() : init();
};

function initMaster() {
  cluster.on('death', function(worker) {
    cluster.fork();
  });

  var workerCount = os.cpus().length;
  var i = workerCount;
  while(i--) {
    cluster.fork();
  }
}