/**
 * File name: main.controller.js.js
 * Author: Lindon Camaj
 * Date: 7/2/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
angular.module("mainModule").controller("MainController", ["$scope", "MainService", "$state",  function($scope, MainService, $state){
 		
    $scope.categories = [];

    MainService.getMainPageData().then(function(response){
        $scope.categories = response.categories;
    });

    $scope.randomGames = [];

    MainService.getRandomData().then(function(response){
        $scope.randomGames = response.games;
    });

    /* -- this function generates random games on page -- */
    $scope.takeRandomNum = function(){
			$scope.Math = window.Math;
      $scope.random = (Math.random()*100)/10;
      $scope.num = Math.round($scope.random); 
      return $scope.num;
    };
    
    /* -- this function triggers when game is clicked -- */
           /* -- and it calls iframe for game -- */
    $scope.gamePopUp = function(item) {
      var trigger = $(item.target).parents('div.wrap-content');
      var target = trigger.find('div.game-frame');
      var style = target.css('display');
      $scope.toggleGame.toggleFrame(style, target);
  	};

  	/* -- this function is called to determine whether --*/
  	    /* -- iframe should be shown or hidden -- */
  	$scope.toggleGame = {
      toggleFrame : function(style, target){
                  		if(style==='none'){
                        this.getUrl = $state.current.url;
                      	target.css('display','block');
                      }else{
                        target.css('display','none');
                      }
                  	},
      getUrl : ""             
    };
}]);