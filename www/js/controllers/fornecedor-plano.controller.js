angular
.module('app.controllers')
.controller('FornecedorPlanoCtrl', function($scope, $state, FornecedorPlano, FornecedorPagamento, Plano, Pagamentos, $ionicPopup, $ionicLoading, $interval) {
  $scope.planos = {};
  $scope.pagamentos = {};

  _init();

  function _init(){
   _getPlanos();
   _getPagamentos();
   _setStateEventInterceptor();
  }

  function _setStateEventInterceptor() {
    $scope.$on("$stateChangeStart", function(e, toState, toParams, fromState, fromParams) {
      if (!fromState.name)
        return;

      if (fromState.name == $state.current.name) {
        _saveFornecedorPlano();
        _saveFornecedorPagamento();
      }
    });
  }

  function _getPlanos(){
    Plano.query(function(planos){
      $scope.planos = planos;

      _getFornecedorPlano();
    });
  };

  function _getPagamentos(){
    Pagamentos.query(function(pagamentos){
      $scope.pagamentos = pagamentos;

      _getFornecedorPagamento();
    });
  };

  function _getFornecedorPlano(){
    FornecedorPlano.query(function(fornecedorPlano){
      var checkedPlanos = fornecedorPlano.map(function(fornecedorPlano) {
        return fornecedorPlano.fop_cd_plano;
      });

      $scope.planos = $scope.planos.map(function(plano) {
        plano.checked = checkedPlanos.indexOf(plano.pla_cd_plano) !== -1;
        return plano;
      });
    });
  };

  function _getFornecedorPagamento(){
    FornecedorPagamento.query(function(fornecedorPagamento) {
      var checkedPagamentos = fornecedorPagamento.map(function(fornecedorPagamento) {
        return fornecedorPagamento.fpg_cd_pagamento;
      });

      $scope.pagamentos = $scope.pagamentos.map(function(pagamento) {
        pagamento.checked = checkedPagamentos.indexOf(pagamento.pag_cd_pagamento) !== -1;
        return pagamento;
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
      .filter(function(plano) {
        return plano.checked;
      })
      .map(function(plano) {
        return { fop_cd_plano: plano.pla_cd_plano };
      });

    changes.unchecked =
      $scope
      .planos
      .filter(function(plano) {
        return !plano.checked;
      })
      .map(function(plano) {
        return { fop_cd_plano: plano.pla_cd_plano };
      });

    FornecedorPlano
    .save(changes)
    .$promise
    .then(function(result) {
      console.log(result);
    })
    .catch(_error)
  }


  function _saveFornecedorPagamento(){
      var changes = {
        checked: [],
        unchecked: []
      };

      changes.checked =
        $scope
        .pagamentos
        .filter(function(pagamento) {
          return pagamento.checked;
        })
        .map(function(pagamento) {
          return { fpg_cd_pagamento: pagamento.pag_cd_pagamento };
        });

      changes.unchecked =
        $scope
        .pagamentos
        .filter(function(pagamento) {
          return !pagamento.checked;
        })
        .map(function(pagamento) {
          return { fpg_cd_pagamento: pagamento.pag_cd_pagamento };
        });

      FornecedorPagamento
      .save(changes)
      .$promise
      .then(function(result) {
        console.log(result);
      })
      .catch(_error)
    }

  function _error(response) {
    $ionicPopup.alert({
      title: 'Vish, deu ruim..',
      template: response.errorMessage
    });
  }
});
