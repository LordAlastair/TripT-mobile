angular
.module('app.services', ['ngResource'])
.factory('Veiculo', ['$resource', function($resource, BACKEND_URL){
  return $resource('http://192.168.99.100:3000/veiculo/:id');
}]);
