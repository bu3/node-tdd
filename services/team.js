var player = require('./player');
var Rx = require('rx');

function getTeam() {

  return Rx.Observable.create(function (observer) {
    observer.onNext(player.find());
    observer.onCompleted();
  });

}

module.exports.getTeam = getTeam;