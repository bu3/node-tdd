module.exports = {
  parsePlayers: function(response){
    var players = [];
    response.players.forEach(function(player){
      players.push(player.name);
    });
    return players;
  }
};