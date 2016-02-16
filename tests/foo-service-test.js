var fooService = require('../services/foo-service');
var expect = require('chai').expect;


describe('Foo service', function() {

    it('log results',function(done){
        var mockedData = ['sto', 'ka'];
        fooService.init({getIt : function(callback){
            callback(mockedData)
        }});

        fooService.count(function (results){
            expect(results).to.equal(mockedData);
            done();
        });

    });

});