/**
 * File name: oryx-game.module.js
 * Author: Lindon Camaj
 * Date: 7/22/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
var gameModule = angular.module('gameModule', ['libModule']);
gameModule.config(['$stateProvider', function ($stateProvider){
    $stateProvider
        .state('game', {
            url: '/game/:type/:name',
            templateUrl: "@!views/game/main.html",
            controller: "GameController"
        });
}]);