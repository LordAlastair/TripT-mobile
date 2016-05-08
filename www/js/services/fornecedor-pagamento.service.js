angular
.module('app.services')
.factory('FornecedorPagamento',['$resource', 'BACKEND_URL', function($resource, BACKEND_URL) {
  var methods = {
    save: {
      method: 'POST',
      isArray: true
    }
  };

  var key = {
    fpg_cd_fornecedor_pagamentos: "@fpg_cd_fornecedor_pagamentos"
  };

  var url = BACKEND_URL + '/fornecedor-pagamentos/:fpg_cd_fornecedor_pagamentos'

  return $resource(url, key, methods);
}]);
