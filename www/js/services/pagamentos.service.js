angular
.module('app.services')
.factory('Pagamentos', ['$resource', 'BACKEND_URL', function($resource, BACKEND_URL) {
  return $resource(BACKEND_URL + '/pagamentos/');
}]);
