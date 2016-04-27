angular
.module('app.controllers')
.controller('FornecedorPlanoCtrl', function($scope, FornecedorPlanoService, PlanoService, $ionicPopup, $ionicLoading) {

  $scope.fornecedorplano = {};
  $scope.planos = {};

  function _getPlanos(){
    PlanoService
    .query()
    .then(function(planos){
      $scope.planos = planos;
    });
  };

  function _getFornecedorPlano(){
    FornecedorPlanoService
    .load()
    .then(function (res){
      $scope.fornecedorplano = res.data;
      console.log(res.data);
    });
  };

  var $scope.checkedPlanos = fornecedorplano.map(fornecedoplano => fornecedorplano.fop_cd_plano);
//var $scope.checkedPlanos = fornecedorplano.map(function(fornecedoplano){ return fornecedorPlano.fop_cd_plano;};);
//fornecedorPlanos.forEach(function(fornecedorPlano) {
//  checkedPlanos.push(fornecedorPlano.fop_cd_plano);
//});



});
