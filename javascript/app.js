/**
   * Archivo con funciones javascript, Configuración
   * @autor Sergio Iván Mayor
   * @fecha Santiago de Cali, Septiembre 11 del 2015
*/

var app = angular.module('principal', ['ionic', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('login', {
			url: "/login",
			templateUrl: "templates/login.html",
			controller: 'LoginCtrl'
		})
		.state('chat', {
			url: "/chat/:nickname",
			templateUrl: "templates/chat.html",
			controller: 'Chat'
		})
	
		$urlRouterProvider.otherwise("/login");
});



