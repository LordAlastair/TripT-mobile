angular
.module('app.services')
.factory('Cliente', function($resource, BACKEND_URL) {
  return $resource(BACKEND_URL + '/cliente/');
});
