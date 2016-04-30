angular
.module('app.services')
.factory('PlanoService', ['$resource', 'BACKEND_URL', function($resource, BACKEND_URL) {
  return $resource(BACKEND_URL + '/planos/');
}]);
