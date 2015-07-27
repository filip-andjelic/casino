/**
 * File name: app.js
 * Author: Lindon Camaj
 * Date: 7/2/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
var libModule = angular.module("libModule", ["ui.router"]);

var angularApp = angular.module("mainApp", [
    "libModule",
    "mainModule",
    "categoryModule",
    "gameModule",
    "aboutModule",
    "contactModule"
]);

angularApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider){
    // Rule that converts url to lower case
    $urlRouterProvider.rule(function($injector, $location) {
        var path = $location.path(),
            lowerCasePath = path.toLowerCase();

        // if path is not lower case then convert to lower case
        if (path != lowerCasePath) {
            $location.replace().path(lowerCasePath);
        }
    });

    // root url routes
    //$urlRouterProvider.when('/app', '/app/dashboard');

    // set HTML 5 urls mode
    $locationProvider.html5Mode(true).hashPrefix("!");
}]);