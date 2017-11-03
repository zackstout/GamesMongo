
myApp.controller('GameController', ['$http', function($http) {
    console.log('GameController created.');

    var vm = this;
    //grabs the data from the input fields:
    vm.newGame = {};
    vm.games = [];

    vm.refreshGames = function() {
      $http.get('/games').then(function(response) {
        vm.games = response.data;
      }).catch(function(err) {
        console.log('nopppppe');
      });
    };

    vm.refreshGames();

    vm.addGame = function(gameToAdd) {
        console.log(gameToAdd);
        $http.post('/games', gameToAdd).then(function(response) {
          console.log('yup');
          vm.refreshGames();

        }).catch(function(error) {
          console.log('nope');

        });
    };

    vm.likeGame = function(gameId, game) {
      console.log('hi');
      $http.put('/games/' + gameId, game).then(function(response) {
        vm.refreshGames();
      }).catch(function(error) {
        console.log('nuts!!!');
      });
    };

    vm.deleteGame = function(gameId) {
      $http.delete('/games/' + gameId).then(function(response) {
        vm.refreshGames();
      }).catch(function(error) {
        console.log('awwww');
      });
    };

}]);
