angular
.module('app.services')
.factory('Caracteristica', ['$resource', 'BACKEND_URL', function($resource, BACKEND_URL) {
  return $resource(BACKEND_URL + '/caracteristica/:car_cd_caracteristica');
}]);
