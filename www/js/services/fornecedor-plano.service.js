angular
.module('app.services')
.factory('FornecedorPlanoService',['$resource', 'BACKEND_URL', function($resource, BACKEND_URL) {
  var methods = {
    save: {
      method: 'POST',
      isArray: true
    }
  };

  var key = {
    fop_cd_fornecedor_plano: "@fop_cd_fornecedor_plano"
  };

  var url = BACKEND_URL + '/fornecedor-plano/:fop_cd_fornecedor_plano'

  return $resource(url, key, methods);
}]);
