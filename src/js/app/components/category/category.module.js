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
            templateUrl: "@!views/category/main.html",
            controller: "CategoryController"
        });
}]);