// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js

app.controller('VentanaPrincipal', function($scope, $stateParams) {
		
	angular.element(document.querySelector('#tabSubheader')).css('display', 'block');
	angular.element(document.querySelector('#contenedorPrincipal')).removeClass('padding has-header');
	angular.element(document.querySelector('#contenedorPrincipal')).addClass('padding has-subheader');
	
	var param1= $stateParams.correo;	
	
	alert(param1);
	
});
