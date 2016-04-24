angular
.module('app.controllers')
.controller('FornecedorPlanoCtrl', function($scope, FornecedorPlanoService, $ionicPopup, $ionicLoading) {


  function _save(){
    FornecedorPlanoService
    .update($scope.fornecedorplano)
    .then(_success)
    .catch(_error)
    .finally(_finally);
  }


});
