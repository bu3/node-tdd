var expect = require('chai').expect;
var SandboxedModule = require('sandboxed-module');


describe('Team Service', function () {
  var team;
  var users = ['', ''];

  beforeEach(function () {
    team = SandboxedModule.require('../../services/team', {
      requires: {
        "./player": {
          find: function () {
            return users;
          }
        }
      }
    });
  });

  it('returns a list of users', function (done) {

    var observable = team.getTeam();

    observable.subscribe(function (team) {
      expect(team).to.eql(users);
      done();
    });

  });
});
