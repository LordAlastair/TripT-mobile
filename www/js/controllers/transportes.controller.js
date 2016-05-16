angular
.module('app.controllers')
.controller('TransportesCtrl', function($scope, $ionicLoading, $ionicModal, $ionicPopup, $stateParams, Search, Bairro, Instituicao, TIPO_TRANSPORTE) {
  $scope.TIPO_TRANSPORTE = TIPO_TRANSPORTE;

  $scope.veiculo = {};
  $scope.filtro = {};
  $scope.veiculos = [];
  $scope.bairros = [];
  $scope.instituicoes = [];
  $scope.loading = false;
  $scope.filtrarVeiculosModal = null;
  $scope.filterBarInstance = null;
  $scope.getVeiculos = getVeiculos;
  $scope.pesquisar = {}


  $scope.refresh = refresh;

  _init();

  function _init() {
    getVeiculos();
    _setupFiltrarVeiculosModal();
    _getBairros();
    _getInstituicoes();
  }

  function refresh() {
    Search
    .query()
    .$promise
    .then(function (veiculos) {
      $scope.veiculos = veiculos;
      $scope.$broadcast('scroll.refreshComplete');
    })
    .catch(_error);
  }

  function getVeiculos() {
    _toggleLoading();
    Search
    .query($scope.filtro)
    .$promise
    .then(function (veiculos) {
      $scope.veiculos = veiculos;

      $scope.pesquisar = {
          inv_cd_tipo_transporte: $stateParams.inv_cd_tipo_transporte
      };
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

  function _getInstituicoes() {
    _toggleLoading();

    Instituicao
    .query()
    .$promise
    .then(function (instituicoes) {
      $scope.instituicoes = instituicoes;
      _toggleLoading();
    })
    .catch(_error);
  }

  function _toggleLoading() {
    $scope.loading = !$scope.loading;
  }

  function _error(response) {
    $ionicPopup.alert({
      title: 'Vish, deu ruim..',
      template: response.errorMessage
    });
  }

  function _setupFiltrarVeiculosModal() {
    $ionicModal
      .fromTemplateUrl('templates/modals/filtros.html', {
      scope: $scope,
      animation: 'slide-in-up'
    })
    .then(function(modal) {
      $scope.filtrarVeiculosModal = modal;
    });

    $scope.$on('$destroy', function() {
      $scope.filtrarVeiculosModal.remove();
    });

    $scope.$on('modal.hidden', function(res) {
      if($scope.filtro.bai_cd_bairro)
        $scope.pesquisar.VeiculoBairros = {
          veb_cd_bairro: $scope.filtro.bai_cd_bairro
        };

      if($scope.filtro.ins_cd_instituicao)
        $scope.pesquisar.Instituicao = {
          ins_cd_instituicao: $scope.filtro.ins_cd_instituicao
        };

    });
  }
})
