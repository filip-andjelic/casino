/*!
 * BildStudio Demo
 * www.bild-studio.net
 * @author Lindon Camaj
 * @version 0.0.1
 * Copyright (c) BildStudio. All rights reserved.
 */
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

/* ------------------------------------------------------------------------------------------------------------ */

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
            templateUrl: "/build/app/views/about/about.html",
            controller: "AboutController"
        });
}]);

/* ------------------------------------------------------------------------------------------------------------ */

/**
 * File name: category.module.js
 * Author: Lindon Camaj
 * Date: 7/23/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
var categoryModule = angular.module('categoryModule', ['libModule']);
categoryModule.config(['$stateProvider', function ($stateProvider){
    $stateProvider
        .state('category', {
            url: '/category/{id}',
            templateUrl: "/build/app/views/category/main.html",
            controller: "CategoryController"
        });
}]);

/* ------------------------------------------------------------------------------------------------------------ */

/**
 * File name: contact.module.js.js
 * Author: Lindon Camaj
 * Date: 7/2/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
var contactModule = angular.module("contactModule", ["libModule"]);
contactModule.config(['$stateProvider', function ($stateProvider){
    $stateProvider
        .state('contact', {
            url: "/contact",
            templateUrl: "/build/app/views/contact/contact.html",
            controller: "ContactController"
        });
}]);

/* ------------------------------------------------------------------------------------------------------------ */

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
            templateUrl: "/build/app/views/game/main.html",
            controller: "GameController"
        });
}]);

/* ------------------------------------------------------------------------------------------------------------ */

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
            templateUrl: "/build/app/views/main/main.html",
            controller: "MainController"
        });
}]);

/* ------------------------------------------------------------------------------------------------------------ */

/**
 * File name: category.service.js
 * Author: Lindon Camaj
 * Date: 7/23/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
angular.module('categoryModule').service('CategoryService', ['$http', '$q', function($http, $q){
    this.getCategoryData = function(categoryName){
        try{
            if(typeof categoryName !== "undefined" && categoryName !== ''){
                var deferred = $q.defer();
                $http.get('/data/main.json')
                    .success(function(data){
                        deferred.resolve(data);
                    })
                    .error(function(err, status){
                        deferred.reject(err);
                    });
                return deferred.promise;
            }
            return [];
        }
        catch(exc){
            console.log(exc);
        }
    };
}]);

/* ------------------------------------------------------------------------------------------------------------ */

/**
 * File name: oryx-game.service.js
 * Author: Lindon Camaj
 * Date: 7/22/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */

angular.module("gameModule").service("GameService", ["$http", "$q", function($http, $q){

    this.getGameData = function(gameType, gameName){
        try{
            if(typeof gameName !== "undefined" && gameName !== "" && gameName !== null){
                var deferred = $q.defer();
                $http.get("/data/" + gameName + "_game.json")
                    .success(function(data){
                        deferred.resolve(data);
                    })
                    .error(function(err, status){
                        deferred.reject(err);
                    });
                return deferred.promise;
            }
            return null;
        }
        catch(exc){
            console.log(exc);
        }
    };

}]);

/* ------------------------------------------------------------------------------------------------------------ */

/**
 * File name: main.service.js.js
 * Author: Lindon Camaj
 * Date: 7/22/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
angular.module("mainModule").service('MainService', ['$http', '$q', function($http, $q){
    /**
     * Return main data
     * @returns {*}
     */
    this.getMainPageData = function(){
        var deferred = $q.defer();
        $http.get('http://mobile-api.dev.sansabet.com/web/casino/main')
            .success(function(data){
                deferred.resolve(data);
            })
            .error(function(err, status){
                deferred.reject(err);
            });
        return deferred.promise;
    };

}]);

/* ------------------------------------------------------------------------------------------------------------ */

/**
 * File name: about.controller.js.js
 * Author: Lindon Camaj
 * Date: 7/2/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
angular.module("aboutModule").controller("AboutController", ["$scope", function($scope){
    console.log("AboutController");
}]);

/* ------------------------------------------------------------------------------------------------------------ */

/**
 * File name: category.controller.js
 * Author: Lindon Camaj
 * Date: 7/23/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
angular.module('categoryModule').controller('CategoryController', ['$scope', 'CategoryService', function($scope, CategoryService){

    $scope.games = [];

    var result = CategoryService.getCategoryData('test');
    if(typeof result !== "undefined" && result !== null){
        result.then(function(response){
            console.log(response);
            $scope.games = response.games;
        });
    }

}]);

/* ------------------------------------------------------------------------------------------------------------ */

/**
 * File name: contact.controller.js.js
 * Author: Lindon Camaj
 * Date: 7/2/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
angular.module("contactModule").controller("ContactController", ["$scope", function($scope){
    console.log("ContactController");
}]);

/* ------------------------------------------------------------------------------------------------------------ */

/**
 * File name: oryx-game.controller.js
 * Author: Lindon Camaj
 * Date: 7/22/2015
 * Copyright (c) 2015 Bild Studio
 * http://www.bild-studio.com
 */
angular.module('gameModule').controller('GameController', ['$scope', '$state', '$stateParams', 'GameService', function($scope, $state, $stateParams, GameService){

    $scope.game = {};
console.log($stateParams);
    var result = GameService.getGameData($stateParams.type, $stateParams.name.toLocaleLowerCase());
    if(typeof result !== "undefined" && result !== null){
        result.then(function(response){
            console.log(response);
            $scope.game = response.game;
        });
    }
    console.log("GameController");
}]);

/* ------------------------------------------------------------------------------------------------------------ */

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