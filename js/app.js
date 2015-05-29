var app = angular.module('digitalComic', ['ngRoute', 'ngTouch']);

app.config(function ($routeProvider) { 
	$routeProvider
		.when('/', { 
      controller: 'EpisodeController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/ep/:id', {
    	controller: 'CurrentepisodeController',
    	templateUrl: 'views/episode.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    });
});

