'use strict';

var SearchEngineApp = angular.module('SearchEngineApp',  ["xeditable", "ui.bootstrap"]);

SearchEngineApp.config(function($routeProvider) {
    
    $routeProvider.when(
    	'/FamilyHealthHistory',
    	{
    	    templateUrl: 'partials/FamilyHealthHistory.html',
    	    controller: 'FHHController'
    	});
});
