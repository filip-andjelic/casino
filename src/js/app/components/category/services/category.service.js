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