var expect = require('chai').expect;
var parser = require('../../services/footbal-data-parser');

describe('Football Data Parser', function () {

  it('parses response to a list of players', function (){

    var response = {
      "_links": {
        "self": {
          "href": "http://api.football-data.org/v1/teams/100/players"
        },
        "team": {
          "href": "http://api.football-data.org/v1/teams/100"
        }
      },
      "count": 2,
      "players": [
        {
          "name": "John Doe",
          "position": "Centre Back",
          "jerseyNumber": 12,
          "dateOfBirth": "1987-02-11",
          "nationality": "Bosnia-Herzegovina",
          "contractUntil": "2016-06-30",
          "marketValue": "4,000,000 €"
        },
        {
          "name": "Will Smith",
          "position": "Centre Back",
          "jerseyNumber": 8,
          "dateOfBirth": "1987-02-11",
          "nationality": "Bosnia-Herzegovina",
          "contractUntil": "2016-06-30",
          "marketValue": "4,000,000 €"
        }
      ]
    };

    var players = parser.parsePlayers(response);
    expect(players.length).to.equal(2);
    expect(players[0].name).to.eql('John Doe');
    expect(players[0].position).to.eql('Centre Back');
    expect(players[0].jerseyNumber).to.eql(12);
    expect(players[0].dateOfBirth).to.eql("1987-02-11");
    expect(players[0].nationality).to.eql("Bosnia-Herzegovina");
    expect(players[0].contractUntil).to.eql("2016-06-30");
    expect(players[0].marketValue).to.eql("4,000,000 €");
  });
});