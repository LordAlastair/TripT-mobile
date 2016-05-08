angular
.module('app.services')
.factory('Bairro', function($resource, BACKEND_URL) {
  return $resource(BACKEND_URL + '/bairro/');
});
