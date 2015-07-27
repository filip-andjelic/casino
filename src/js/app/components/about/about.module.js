/**
 * File name: about.module.js.js
 * Author: Lindon Camaj
 * Date: 7/2/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
var aboutModule = angular.module("aboutModule", ["libModule"]);
aboutModule.config(['$stateProvider', function ($stateProvider) {
    $stateProvider
        .state("about", {
            url: "/about",
            templateUrl: "@!views/about/about.html",
            controller: "AboutController"
        });
}]);