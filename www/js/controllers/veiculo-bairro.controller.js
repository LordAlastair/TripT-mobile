angular
  .module('app.controllers')
  .controller('VeiculoBairro', function ($scope, $ionicLoading, $ionicPopup, VeiculoBairro) {
    $scope.veiculoBairros = [];

    $scope.filtro = '';
    $scope.loading = false;

    $scope.refresh = refresh;

    _init();

    function _init() {
      _getVeiculoBairros();
    }

    function refresh() {
      VeiculoBairro
        .query()
        .$promise
        .then(function (veiculoBairros) {
          $scope.veiculoBairros = veiculoBairros;
          $scope.$broadcast('scroll.refreshComplete');
        })
        .catch(_error);
    }

    function _getInstituicoes() {
      _toggleLoading();

      Instituicao
        .query()
        .$promise
        .then(function (veiculoBairros) {
          $scope.veiculoBairros = veiculoBairros;
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
  })