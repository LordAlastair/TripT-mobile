angular
.module('app.services')
.factory('InstituicaoVeiculo', function($http, BACKEND_URL) {
  var InstituicaoVeiculo = {
    update: function(instituicaoVeiculo){
      return $http({
        method: 'PUT',
        url: BACKEND_URL + '/instituicao-veiculo/',
        data: instituicaoVeiculo
      });
    },
    load: function(instituicaoVeiculo){
      return $http({
        method: 'GET',
        url: BACKEND_URL + '/instituicao-veiculo/',
        data: instituicaoVeiculo
      });
    },
    save: function(instituicaoVeiculo){
      return $http({
        method: 'POST',
        url: BACKEND_URL + '/instituicao-veiculo/',
        data: instituicaoVeiculo
      });
    }
  };

  return InstituicaoVeiculo;
});