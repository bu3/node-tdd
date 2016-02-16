var User = require('./user');

function getTeam(teamId) {
    //console.log(User);
    return User.find({teamId: teamId});
}

module.exports.getTeam = getTeam;