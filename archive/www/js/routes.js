angular
.module('app.routes', [])
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('menu-fornecedores', {
    abstract:true,
    url: '/menu-fornecedores',
    templateUrl: 'templates/menu-fornecedores.html',
    controller: 'MenuFornecedoresCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'SignupCtrl'
  })

  .state('menu-fornecedores.veiculos', {
    url: '/veiculos',
    views: {
      'navigationView': {
        templateUrl: 'templates/veiculos.html',
        controller: 'VeiculosCtrl'
      }
    }
  })

  .state('menu-fornecedores.veiculo', {
    url: '/veiculo/:vei_cd_veiculo',
    views: {
      'navigationView': {
        templateUrl: 'templates/veiculo.html',
        controller: 'VeiculoCtrl'
      }
    }
  })

  .state('recovery', {
    url: '/recovery',
    templateUrl: 'templates/recovery.html',
    controller: 'RecoveryCtrl'
  })
   .state('pagina-inicial', {
    url: '/pagina-inicial',
    templateUrl: 'templates/pagina-inicial.html',
    controller: 'PaginaInicialCtrl'
   })

  $urlRouterProvider.otherwise('/pagina-inicial')
});
