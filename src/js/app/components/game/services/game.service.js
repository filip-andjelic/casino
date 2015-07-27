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