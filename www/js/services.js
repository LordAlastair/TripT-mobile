angular
.module('app.services', ['ngResource'])
.factory('Veiculo', ['$resource', 'BACKEND_URL', function($resource, BACKEND_URL) {
  return $resource(BACKEND_URL + '/veiculo/:vei_cd_veiculo');
}]);
