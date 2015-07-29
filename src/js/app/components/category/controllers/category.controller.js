/*
 * File name: category.controller.js
 * Author: Lindon Camaj
 * Date: 7/23/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
angular.module('categoryModule').controller('CategoryController', ['$scope', 'CategoryService', function($scope, CategoryService){

    $scope.games = [];
    var result = CategoryService.getCategoryData('catId');
    if(typeof result !== "undefined" && result !== null){
        result.then(function(response){
            $scope.games = response.category;
        });
    }
    $scope.prevSlide = function(item) {
    	var slide = item.toElement.parentElement.nextSibling.children;
    	//console.log(slide);
    	$.each(slide, function(index, name){
    		var el = index;
    		console.log(slide[el].class);

    	});
    	
    };

    $scope.nextSlide = function(item) {
    	var slide = item;
    	console.log(slide);
    };
}]);