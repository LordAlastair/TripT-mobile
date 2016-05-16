angular
.module('app.services')
.factory('VeiculoBairro', function($resource, BACKEND_URL) {
  return $resource(BACKEND_URL + '/veiculo-bairro/');
});
