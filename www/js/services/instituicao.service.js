angular
.module('app.services')
.factory('Instituicao', function($resource, BACKEND_URL) {
  return $resource(BACKEND_URL + '/instituicao/');
});
