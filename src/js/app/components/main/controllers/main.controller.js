/**
 * File name: main.controller.js.js
 * Author: Lindon Camaj
 * Date: 7/2/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
angular.module("mainModule").controller("MainController", ["$scope", "MainService", function($scope, MainService){
 		
    $scope.categories = [];

    MainService.getMainPageData().then(function(response){
        $scope.categories = response.categories;
    });

    $scope.goTo = function goTo(pageId) {

	  };

	  
}]);