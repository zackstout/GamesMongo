
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var games = require('./routes/games.router.js');
var port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('server/public'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/games', games);

//mongoose stuff (eventually will be in a module):
var mongoose = require('mongoose');
var databaseUrl = 'mongodb://localhost:27017/realgames';

mongoose.connection.on('connected', function() {
  console.log('we in!');
});

mongoose.connection.on('error', function() {
  console.log("aw nuts bro");
});

//initiate connection:
mongoose.connect(databaseUrl);

/** ---------- START SERVER ---------- **/
app.listen(port, function() {
    console.log('Listening on port: ', port);
});
