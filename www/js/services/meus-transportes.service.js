angular
.module('app.services')
.factory('MeusTransportes', function($resource, BACKEND_URL) {
  return $resource(BACKEND_URL + '/transportes/');
});
