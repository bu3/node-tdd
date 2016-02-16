var express = require('express');
var router = express.Router();
var fooService = require('../services/foo-service')
var fooClient = require('../services/foo-client')

/* GET home page. */
router.get('/', function(req, res, next) {

  fooService.init(fooClient);
  fooService.count(function (results){
    console.log(results);
  });

  res.render('index', { title: 'Express2' });
});

module.exports = router;
