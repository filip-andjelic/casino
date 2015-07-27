/**
 * File name: main.module.js.js
 * Author: Lindon Camaj
 * Date: 7/2/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */

var mainModule = angular.module('mainModule', ['libModule']);
mainModule.config(['$stateProvider', function ($stateProvider){
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: "@!views/main/main.html",
            controller: "MainController"
        });
}]);