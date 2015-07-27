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
            templateUrl: "@!views/contact/contact.html",
            controller: "ContactController"
        });
}]);