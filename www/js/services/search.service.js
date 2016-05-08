angular
.module('app.services')
.factory('Search', ['$resource', 'BACKEND_URL', function($resource, BACKEND_URL) {
  var methods = {};

  var key = {
    vei_cd_veiculo: "@vei_cd_veiculo"
  };

  var url = BACKEND_URL + '/search/';

  return $resource(url, key, methods);
}]);
