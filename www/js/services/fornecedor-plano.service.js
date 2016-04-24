angular
.module('app.services')
.factory('FornecedorPlanoService', function($http, BACKEND_URL) {
  var FornecedorPlanoService = {
    create: function (fornecedorPlano) {
      return $http({
        method: 'POST',
        url: BACKEND_URL + '/fornecedor-plano',
        data: fornecedorplano
      });
    },
    update: function (fornecedorPlano) {
      return $http({
        method: 'PUT',
        url: BACKEND_URL + '/fornecedor-plano/',
        data: fornecedorplano
      });
    },
    load: function(fornecedorPlano) {
        return $http({
          method: 'GET',
          url: BACKEND_URL + '/fornecedor-plano/',
          data: fornecedorplano
        });
    }
  };

  return FornecedorPlanoService;
});
