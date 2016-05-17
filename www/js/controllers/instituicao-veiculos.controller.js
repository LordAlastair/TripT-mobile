angular
  .module('app.controllers')
  .controller('InstituicaoVeiculosCtrl', function ($scope, $state, $interval, $ionicLoading, $ionicModal, $ionicPopup, Bairro, InstituicaoVeiculo, VeiculoBairro) {
    $scope.instituicaoVeiculo = {};
    $scope.instituicaoVeiculos = [];
    $scope.veiculoBairros = [];
    $scope.bairros = [];

    $scope.addInstituicaoVeiculoModal = null;

    $scope.filtro = '';
    $scope.loading = false;
    $scope.showDelete = false;

    $scope.toggleDelete = toggleDelete;
    $scope.saveInstituicaoVeiculo = saveInstituicaoVeiculo;
    $scope.removeInstituicaoVeiculo = removeInstituicaoVeiculo;
    $scope.refresh = refresh;
    $scope.selection = [];

    _init();

    function _init() {
      _getInstituicaoVeiculos();
      _getVeiculoBairros();
      _setupAddInstituicaoVeiculoModal();
      _getBairros();
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

    function _setupAddInstituicaoVeiculoModal() {
      $ionicModal
        .fromTemplateUrl('templates/modals/add-instituicao-veiculo.html', {
          scope: $scope,
          animation: 'slide-in-up'
        })
        .then(function (modal) {
          $scope.addInstituicaoVeiculoModal = modal;
        });

      $scope.$on('$destroy', function () {
        $scope.addInstituicaoVeiculoModal.remove();
      });
    }

    function refresh() {
      InstituicaoVeiculo
        .get()
        .$promise
        .then(function (instituicaoVeiculos) {
          $scope.instituicaoVeiculos = instituicaoVeiculos;
          $scope.$broadcast('scroll.refreshComplete');
        })
        .catch(_error);
    }

    function removeInstituicaoVeiculo(instituicaoVeiculo, $index) {
      $ionicPopup.confirm({
        title: 'Remover Rota',
        template: 'Tem certeza?',
        okType: 'button-assertive'
      })
        .then(function (res) {
          if (res) {
            InstituicaoVeiculo
              .delete(instituicaoVeiculo)
              .$promise
              .then(function (res) {
                console.log(res);
                $scope.instituicaoVeiculos.splice($index, 1);
              })
              .catch(_error);
          }
        });
    }
    function saveInstituicaoVeiculo() {
      $scope.instituicaoVeiculo.bairros = $scope.selection;
      InstituicaoVeiculo
        .save($scope.instituicaoVeiculo)
        .then(function (instituicaoVeiculo) {
          //$scope.instituicaoVeiculo = instituicaoVeiculo;
          _created();
        })
        .catch(_error)
    }

    function _created(response) {
      $ionicPopup.alert({
        title: 'Dados inclusos com sucesso!',
      });
    }

    function _saveInstituicaoVeiculoSuccess(instituicaoVeiculo) {
      $ionicPopup.alert({
        title: 'Cadastro Rota',
        template: 'Rota cadastrada com sucesso!'
      })
        .then(function () {
          $scope.addInstituicaoVeiculoModal.hide();
        })

      $scope.instituicaoVeiculos.push(veiculo);
    }

    function _getInstituicaoVeiculos() {
      _toggleLoading();

      InstituicaoVeiculo
        .load()
        //.$promise
        .then(function (instituicaoVeiculos) {
          $scope.instituicaoVeiculos = instituicaoVeiculos;
          _toggleLoading();
        })
        .catch(_error);
    }

    function _getVeiculoBairros() {
      VeiculoBairro
      .query()
      .$promise
      .then(function (veiculoBairros) {
        $scope.veiculoBairros = veiculoBairros;
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

    $scope.toggleSelection = function toggleSelection(bairro) {
      var idx = $scope.selection.indexOf(bairro);

      // is currently selected
      if (idx > -1) {
        $scope.selection.splice(idx, 1);
      }

      // is newly selected
      else {
        $scope.selection.push(bairro);
      }
    };

  })
