angular
  .module('app.controllers')
  .controller('InstituicaoVeiculoCtrl', function ($scope, $stateParams, InstituicaoVeiculo, VeiculoBairros) {
    $scope.onEditMode = false;
    $scope.InstituicaoVeiculo = null;
    $scope.VeiculoBairros = [];
    $scope.selectedVeiculoBairros = [];
    $scope.Bairros = [];
    $scope.Veiculos = [];
    $scope.Instituicoes = [];
    
    $scope.save = save;

    $scope.findInSelected = function (value) {
      return $scope.selectedBairros.indexOf(value) >= 0;
    };

    _init();

    function _init() {
      _getInstituicaoVeiculo($stateParams.inv_cd_instituicao_veiculo);
      _getVeiculos();
      _getBairros();
      _getInstituicoes();
    }

    function toggleEditMode() {
      $scope.onEditMode = !$scope.onEditMode;
    }

    function _getInstituicaoVeiculo(inv_cd_instituicao_veiculo, cb) {
      InstituicaoVeiculo.get({
        inv_cd_instituicao_veiculo: inv_cd_instituicao_veiculo
      }, function (instituicaoVeiculo) {
        $scope.instituicaoVeiculo = instituicaoVeiculo;

        $scope.selectedBairros =
          InstituicaoVeiculo
            .VeiculoBairros
            .map(function (veiculoBairros) {
              return veiculoBairros.veb_cd_bairro
            });

        _getVeiculoBairros();
      });
    }

    function _getVeiculoBairros() {
      VeiculoBairros.query(function (veiculoBairros) {
        $scope.veiculoBairros = veiculoBairros;
        console.log(veiculoBairros);
      });
    }

    function _getVeiculos() {
      _toggleLoading();

      Veiculo
        .query()
        .$promise
        .then(function (veiculos) {
          $scope.veiculos = veiculos;
          _toggleLoading();
        })
        .catch(_error);
    }

    function _getBairros() {
      _toggleLoading();

      Bairro
        .query()
        .$promise
        .then(function (bairros) {
          $scope.bairros = bairros;
          _toggleLoading();
        })
        .catch(_error);
    }

  function _getInstituicoes(){
    Instituicao
    .query(function (instituicoes) {
      $scope.instituicoes = instituicoes;
    })
  }

  })
