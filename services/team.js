var player = require('./player');

function getTeam(callback) {
  callback(null, player.find());
}

module.exports.getTeam = getTeam;