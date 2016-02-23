var expect = require('chai').expect;
var SandboxedModule = require('sandboxed-module');


describe('Football Data Service', function () {

  it('returns team members', function (done) {

    var response = {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/teams/66/response"
        },
        "team": {
          "href": "http://api.football-data.org/v1/teams/66"
        }
      },
      "count": 1,
      "players": [
        {
          "name": "Bastian Schweinsteiger",
          "position": "Central Midfield",
          "jerseyNumber": 31,
          "dateOfBirth": "1984-08-01",
          "nationality": "Germany",
          "contractUntil": "2018-06-30",
          "marketValue": "18,000,000 €"
        }]
    };

    var footballService = SandboxedModule.require('../../services/football-data-service', {
      requires: {
        'node-rest-client': {
          Client: function(){
            return {
              get: function (url, args, callback) {
                callback(response, null);
              }
            };
          }
        }
      }
    });

    var observable = footballService.getTeam();
    observable.subscribe(
      function (players) {
        expect(players[0].name).to.eql(response.players[0].name);
        done();
      });
  });

});

