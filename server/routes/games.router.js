
var express = require('express');
var router = express.Router();

//schema time (uppercase to indicate constructor function):
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//provides a bit of context and structure for what data-objects should be:
var GameSchema = new Schema({name: String, rating: Number});
//lets us do all the commands we were using in the terminal:
var Game = mongoose.model('Game', GameSchema, 'games');


router.get('/', function(req, res) {
  Game.find({}, function(err, foundGames) {
    if (err) {
      console.log('whoooops');
      res.sendStatus(500);
    } else {
      res.send(foundGames);
    }
  });
});

//mongoose handles the POOL for us!!!
router.post('/', function(req, res) {
  console.log(req.body);
  //can pass in req.body, or add in new properties if you want:
  var gameToAdd = new Game(req.body);
  //"save" instead of "insert":
  gameToAdd.save(function(err, data) {
    if (err) {
      console.log('ooooops');
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete('/:id', function(req, res) {
  var gameId = req.params.id;
  //the _id needn't be in quotes, but if the thing's name had a dot, we would need quotes:
  Game.findByIdAndRemove({"_id": gameId}, function(err, data) {
    if (err) {
      console.log('noooo');
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
