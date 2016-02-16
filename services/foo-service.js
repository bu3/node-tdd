var client;

exports.init = function(client){
    this.client = client;
};

exports.count = function (callback){
    this.client.getIt(callback);
};

