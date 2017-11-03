
myApp.controller('GameController', function(GameService) {
    console.log('GameController created.');

    var vm = this;
    //grabs the data from the input fields:
    vm.newGame = {};

    vm.games = {};

    GameService.refreshGames();

    //grabs the data from the service:
    vm.games = GameService.result;

    console.log(vm.games);

    vm.addGame = function(gameToAdd) {
      GameService.addGame(gameToAdd);
    };

    vm.likeGame = function(gameId, game) {
      GameService.likeGame(gameId, game);
    };

    vm.deleteGame = function(gameId) {
      GameService.deleteGame(gameId);
    };

});
