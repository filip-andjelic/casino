/**
 * File name: oryx-game.controller.js
 * Author: Lindon Camaj
 * Date: 7/22/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
angular.module('gameModule').controller('GameController', ['$scope', '$state', '$stateParams', 'GameService', function($scope, $state, $stateParams, GameService){

    $scope.game = {};
console.log($stateParams);
    var result = GameService.getGameData($stateParams.type, $stateParams.name.toLocaleLowerCase());
    if(typeof result !== "undefined" && result !== null){
        result.then(function(response){
            console.log(response);
            $scope.game = response.game;
        });
    }
    console.log("GameController");
}]);