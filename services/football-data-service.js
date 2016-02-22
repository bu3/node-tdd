var Rx = require('rx');
var parser = require('./footbal-data-parser');
var Client = require('node-rest-client').Client;


module.exports = {

  getTeam: function () {

    var args = {
      headers: { "X-Auth-Token": process.env.AUTH_TOKEN }
    };

    var client = new Client();

    return Rx.Observable.create(
      function (observer) {
        client.get('http://api.football-data.org/v1/teams/100/players', args, function (data, response) {
          observer.onNext(parser.parsePlayers(data));
          observer.onCompleted();
        })
      });
  }
};