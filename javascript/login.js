/**
   * Hoja de estilos de la aplicación GeSa
   * @autor Sergio Iván Mayor
   * @fecha Santiago de Cali, Septiembre 06 del 2015
*/

.controller('LoginCtrl', function($scope) {
    $scope.data = {};
 
    $scope.login = function() {
        console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
    }
})



