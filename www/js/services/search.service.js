angular
.module('app.services')
.factory('Search', ['$resource', 'BACKEND_URL', function($resource, BACKEND_URL) {
  var methods = {
    delete: {
      method: 'DELETE',
      isArray: true
    }
  };

  var key = {
    vei_cd_veiculo: "@vei_cd_veiculo"
  };

  var url = BACKEND_URL + '/veiculo/:vei_cd_veiculo';

  return $resource(url, key, methods);
}]);
