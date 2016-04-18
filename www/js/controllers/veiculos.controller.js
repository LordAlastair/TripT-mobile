angular
.module('app.controllers')
.controller('VeiculosCtrl', function($scope, $ionicLoading, $ionicModal, $ionicPopup, Veiculo) {
  $scope.veiculo = new Veiculo();
  $scope.filtro = '';
  $scope.loading = false;
  $scope.showDelete = false;

  $scope.toggleDelete = toggleDelete;
  $scope.saveVeiculo = saveVeiculo;

  _init();

  function _init() {
    _getVeiculos();
    _setupAddVeiculoModal();
  }

  function _setupAddVeiculoModal() {
    $ionicModal
    .fromTemplateUrl('templates/modals/add-veiculo.html', {
      scope: $scope,
      animation: 'slide-in-up'
    })
    .then(function(modal) {
      $scope.addVeiculoModal = modal;
    });

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });

    $scope.$on('modal.hidden', function() {
      $scope.veiculo = new Veiculo();
    });
  }

  function saveVeiculo() {
    Veiculo
    .save($scope.veiculo)
    .$promise
    .then(function(response) {
      console.log(response);
    })
    .catch(_error)
  }

  function _getVeiculos() {
    _toggleLoading();

    Veiculo.query(function (veiculos) {
      $scope.veiculos = veiculos;
      _toggleLoading();
    });
  }

  function toggleDelete() {
    $scope.showDelete = !$scope.showDelete;
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
})
