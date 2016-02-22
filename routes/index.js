var express = require('express');
var router = express.Router();
var team = require('../services/team')


router.get('/', function(req, res, next) {
  res.render('index', { title: 'A.S.Roma players championship 2000/2001', players: team.getTeam() });
});

module.exports = router;
