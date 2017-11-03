
myApp.service('GameService', function($http) {
  console.log("game service made");
  var gs = this;

  // gs.games = [];
  gs.result = {games: []};

  gs.refreshGames = function() {
    $http.get('/games').then(function(response) {
      // console.log(response.data);
      gs.result.games = response.data;
      console.log(gs.result);
    }).catch(function(err) {
      console.log('nopppppe');
    });
  };

  // gs.refreshGames();

  gs.addGame = function(gameToAdd) {
      console.log(gameToAdd);
      $http.post('/games', gameToAdd).then(function(response) {
        console.log('yup');
        gs.refreshGames();

      }).catch(function(error) {
        console.log('nope');

      });
  };

  gs.likeGame = function(gameId, game) {
    console.log('hi');
    $http.put('/games/' + gameId, game).then(function(response) {
      gs.refreshGames();
    }).catch(function(error) {
      console.log('nuts!!!');
    });
  };

  gs.deleteGame = function(gameId) {
    $http.delete('/games/' + gameId).then(function(response) {
      gs.refreshGames();
    }).catch(function(error) {
      console.log('awwww');
    });
  };

});
