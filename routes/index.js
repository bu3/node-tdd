var express = require('express');
var router = express.Router();
var team = require('../services/team');
var Promise = require('bluebird');

router.get('/', function(req, res) {

  Promise.promisifyAll(team);
  team.getTeamAsync().then(function(players){
    res.render('index', { title: 'A.S.Roma players championship 2000/2001', players: players });
  });


});

module.exports = router;
