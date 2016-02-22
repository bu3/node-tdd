var expect = require('chai').expect;
var SandboxedModule = require('sandboxed-module');
var Promise = require('bluebird');

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

    Promise.promisifyAll(team);
  });

  it('returns a list of users', function (done) {

    team.getTeamAsync().then(function (team) {
      expect(team).to.eql(users);
      done();
    });

  });
});
