var player = require('./player');

function getTeam() {
    return player.find();
}

module.exports.getTeam = getTeam;