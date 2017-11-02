
myApp.controller('GameController', ['$http', function($http) {
    console.log('GameController created.');

    var vm = this;
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

    vm.deleteGame = function(gameId) {
      $http.delete('/games/' + gameId).then(function(response) {
        vm.refreshGames();
      }).catch(function(error) {
        console.log('awwww');
      });
    };

}]);
