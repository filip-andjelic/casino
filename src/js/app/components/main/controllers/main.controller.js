/**
 * File name: main.controller.js.js
 * Author: Lindon Camaj
 * Date: 7/2/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
angular.module("mainModule").controller("MainController", ["$scope", "MainService", function($scope, MainService){
    console.log("MainController");

    $scope.categories = [];

    MainService.getMainPageData().then(function(response){
        //console.log(response);
        $scope.categories = response.categories;
    });

}]);