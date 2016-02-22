var express = require('express');
var router = express.Router();
var team = require('../services/team');
var Rx = require('rx');


router.get('/', function (req, res) {

  var source = team.getTeam();

  source.subscribe(
    function (x) {
      console.log('Observable: ', x);
      res.render('index', {title: 'A.S.Roma players championship 2000/2001', players: x});
    },
    function (e) {
      console.log('onError: %s', e);
    },
    function () {
      console.log('onCompleted');
    });

});

module.exports = router;
