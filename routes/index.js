var express = require('express');
var router = express.Router();
var team = require('../services/football-data-service');

router.get('/', function (req, res) {

  var source = team.getTeam();
  source.subscribe(
    function (x) {
      res.render('index', {title: 'A.S.Roma players championship 2000/2001', players: x});
    },
    function (e) {
      console.log(e);
    },
    function () {
      console.log('onCompleted');
    });
});

module.exports = router;
