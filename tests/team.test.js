// team.spec.js
var sinon = require('sinon');
var expect = require('chai').expect;
var Team = require('../services/team');
var User = require('../services/user');
var SandboxedModule = require('sandboxed-module');


describe('Team', function () {
    var team;
    var users = [{id: 1, id: 2}];

    //var userStub = sinon.stub(User, 'find', function () {
    //    console.log('Inside')
    //    //return users;
    //});

    beforeEach(function () {
        team = SandboxedModule.require('../services/team', {
            requires: {
                "./user": { find: function(){
                    console.log('Socka')
                }}
            }
        });
    });


    it('getTeam', function (done) {

        console.log("Team" + team)
        team = team.getTeam();
        console.log("TEam" + team)
        expect(team).to.eql(users);
        done();
    });
});
