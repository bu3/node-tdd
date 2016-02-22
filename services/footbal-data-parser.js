module.exports = {
  parsePlayers: function(response){

    console.log('-----------------------------------------');
    console.log('-----------------------------------------');
    console.log('-----------------------------------------');
    console.log('-----------------------------------------');
    console.log('-----------------------------------------');
    console.log('-----------------------------------------');
    console.log('-----------------------------------------');
    console.log('-----------------------------------------');
    console.log('-----------------------------------------');
    console.log(response);
    console.log('-----------------------------------------');

    var playersName = [];
    response.players.forEach(function(player){
      playersName.push(player.name);
    });
    return playersName;
  }
};