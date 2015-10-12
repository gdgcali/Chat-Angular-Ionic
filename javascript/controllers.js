/**
   * Archivo con funciones javascript, Controladores
   * @autor Sergio Iván Mayor
   * @fecha Santiago de Cali, Septiembre 11 del 2015
*/

// var ref = new Firebase("https://gesa.firebaseio.com");
var nombreUsuario = '';

app.controller('MainCtrl', function($scope) {
	
	/* angular.element(document.querySelector('#tabSubheader')).css('display', 'none'); */
	/*Metodo para el login de usuarios*/
	/*$scope.Login = function()
	{
		alert('hola mundo');			
	}	*/
	
});

app.controller('LoginCtrl',function($scope, $location) {
	
	$scope.usuario = {};
	
	$scope.AceptarNombre = function() {
		this.nombreUsuario = $scope.usuario.nickname;
		$location.url("/chat/"+this.nombreUsuario);		
    }
});

app.controller('Chat', ["$scope", "chatMessages", "$stateParams", function($scope, chatMessages, $stateParams) {
	
	/* alert($stateParams.nickname); */
	//Set messages to chatMessages factory which returns the firebase data
    $scope.messages = chatMessages
	
    //Initialize message object
    $scope.message = {};
 
    //Add message to the firebase data
    $scope.addMessage = function(message) {
	  
      $scope.messages.$add({usuario: $stateParams.nickname ,content: message});
      //we reset the text input field to an empty string
      $scope.message.theMessage = "";
    };
	
}])
.factory("chatMessages", ['$firebase', "$rootScope", function($firebase, $rootScope){
     // create a reference to the Firebase where we will store our data
     var ref = new Firebase("http://seiwebchat.firebaseio.com");
 
     // this uses AngularFire to create the synchronized array
     return $firebase(ref.limitToLast(10)).$asArray();
}]);
/* 
function ValidarNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57 || (key == 46))
} */
