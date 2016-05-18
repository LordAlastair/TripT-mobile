angular
  .module('app.controllers')
  .controller('InstituicaoCtrl', function ($scope, $ionicLoading, $ionicPopup, Instituicao) {
    $scope.Instituicoes = [];

    $scope.filtro = '';
    $scope.loading = false;

    $scope.refresh = refresh;

    _init();

    function _init() {
      _getInstituicoes();
    
    }

    function refresh() {
      Instituicao
        .query()
        .$promise
        .then(function (instituicao) {
          $scope.Instituicoes = Instituicoes;
          $scope.$broadcast('scroll.refreshComplete');
        })
        .catch(_error);
    }

    function _getInstituicoes() {
      _toggleLoading();

      Instituicao
        .query()
        .$promise
        .then(function (instituicao) {
          $scope.instituicoes = instituicao;
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
