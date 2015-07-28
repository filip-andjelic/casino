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