var express = require('express');
var app = express();
var http = require('http');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//change name after we change the placeholder.js
var db = require('./db/config');

// see routes line 144 for description
var specialHashRegex = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(require('./routes'));

// Start server
http.createServer(app).listen(app.get('port'), function (req, res) {
  console.log('Express server listening on port ' + app.get('port'));
//to do - error handling
});



console.log('server started ', Date());
