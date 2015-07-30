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
            $scope.Math = window.Math;
            /* 
             this function takes exact number of game icons
             for particular page and calculates how many slides
             is needed to be made, 12 icons per slide
            */
            $scope.gameGroup = function(index) {
            	var num = Math.ceil($scope.games[index].games.length/12);
            	var niz = [];
            	for (num; num>0; num--) niz.push(num);
            	return niz;
            };
        });
    }

    $scope.prevSlide = function(item) {
    	var trigger = $(item.target);
    	var slideActive = trigger.parent().next().find('div.active');
    	var slidePrev = slideActive.prev();
    	slideActive.addClass('hide').removeClass('active');
    	slidePrev.removeClass('hide').addClass('active');
    };

    $scope.nextSlide = function(item) {
    	var trigger = $(item.target);
    	var slideActive = trigger.parent().prev().find('div.active');
    	var slideNext = slideActive.next();
    	slideActive.addClass('hide').removeClass('active');
    	slideNext.removeClass('hide').addClass('active');
    };
}]);