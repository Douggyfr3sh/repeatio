var mongoose = require('mongoose');


mongooseURI = 'mongodb://mLabSandboxUser:123abc@ds111922.mlab.com:11922/heroku_6zsgjskh';
//This URI for local testing (not deployed): 'mongodb://localhost/flashcardsdb';

mongoose.connect(mongooseURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection err'));

db.once('open', function() {
  console.log('Mongodb connection is open');
});
