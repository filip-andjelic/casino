/**
 * File name: category.controller.js
 * Author: Lindon Camaj
 * Date: 7/23/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
angular.module('categoryModule').controller('CategoryController', ['$scope', 'CategoryService', function($scope, CategoryService){
    console.log("CategoryController");

    $scope.games = [];

    var result = CategoryService.getCategoryData('test');
    if(typeof result !== "undefined" && result !== null){
        result.then(function(response){
            console.log(response);
            $scope.games = response.games;
        });
    }

}]);