angular
.module('app.controllers')
.controller('FornecedorPlanoCtrl', function($scope, $state, FornecedorPlanoService, PlanoService, $ionicPopup, $ionicLoading, $interval) {
  $scope.planos = {};

  _init();

  function _init(){
   _getPlanos();
   _getFornecedorPlano();
   _setStateEventInterceptor();
  }

  function _setStateEventInterceptor() {
    $scope.$on("$stateChangeStart", function(e, toState, toParams, fromState, fromParams) {
      if (!fromState.name)
        return;

      if (fromState.name == $state.current.name) {
        _saveFornecedorPlano();
      }
    });
  }

  function _getPlanos(){
    PlanoService.query(function(planos){
      $scope.planos = planos;
    });
  };

  function _getFornecedorPlano(){
    FornecedorPlanoService.query(function(fornecedorPlano){
      var checkedPlanos = fornecedorPlano.map(fornecedorPlano => fornecedorPlano.fop_cd_plano);

      $scope.planos = $scope.planos.map(plano => {
        plano.checked = checkedPlanos.indexOf(plano.pla_cd_plano) !== -1;
        return plano;
      });
    });
  };

  function _saveFornecedorPlano(){
    var changes = {
      checked: [],
      unchecked: []
    };

    changes.checked =
      $scope
      .planos
      .filter(plano => plano.checked)
      .map(plano => {
        return { fop_cd_plano: plano.pla_cd_plano };
      });

    changes.unchecked =
      $scope
      .planos
      .filter(plano => !plano.checked)
      .map(plano => {
        return { fop_cd_plano: plano.pla_cd_plano };
      });

      FornecedorPlanoService
      .save(changes)
      .$promise
      .then(result => console.log(result))
      .catch(_error)
  }

  function _error(response) {
    $ionicPopup.alert({
      title: 'Vish, deu ruim..',
      template: response.errorMessage
    });
  }
});
