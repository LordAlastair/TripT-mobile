angular
.module('app.routes', [])
.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('menu-fornecedor', {
    abstract: true,
    url: '/menu-fornecedor',
    templateUrl: 'templates/fornecedor/menu.html',
    controller: 'MenuFornecedorCtrl'
  })

  .state('menu-cliente', {
    abstract: true,
    url: '/menu-cliente',
    templateUrl: 'templates/cliente/menu.html',
    controller: 'MenuClienteCtrl'
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
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

  .state('recovery', {
    url: '/recovery',
    templateUrl: 'templates/recovery.html',
    controller: 'RecoveryCtrl'
  })

  .state('menu-fornecedor.veiculos', {
    url: '/veiculos',
    views: {
      'navigationView': {
        templateUrl: 'templates/fornecedor/veiculos.html',
        controller: 'VeiculosCtrl'
      }
    }
  })

  .state('menu-fornecedor.veiculo', {
    url: '/veiculo/:vei_cd_veiculo',
    views: {
      'navigationView': {
        templateUrl: 'templates/fornecedor/veiculo.html',
        controller: 'VeiculoCtrl'
      }
    }
  })

  .state('menu-fornecedor.changePass', {
    url: '/changePass',
    views: {
      'navigationView': {
        templateUrl: 'templates/generic/change-pass.html',
        controller: 'ChangePassCtrl'
      }
    }
  })

  .state('menu-fornecedor.configuracoes', {
    url: '/usuario/',
    views: {
      'navigationView': {
        templateUrl: 'templates/generic/configuracoes.html',
        controller: 'ConfiguracoesCtrl'
      }
    }
  })

  .state('menu-fornecedor.meu-cadastro', {
    url: '/fornecedor',
    views: {
      'navigationView': {
        templateUrl: 'templates/fornecedor/fornecedor.html',
        controller: 'FornecedorCtrl'
      }
    }
  })


  .state('menu-fornecedor.plano', {
    url: '/fornecedor-plano',
    views: {
      'navigationView': {
        templateUrl: 'templates/fornecedor/fornecedor-plano.html',
        controller: 'FornecedorPlanoCtrl'
      }
    }
  })

  .state('menu-cliente.configuracoes', {
    url: '/usuario/',
    views: {
      'navigationView': {
        templateUrl: 'templates/generic/configuracoes.html',
        controller: 'ConfiguracoesCtrl'
      }
    }
  })

  .state('menu-cliente.changePass', {
    url: '/changePass',
    views: {
      'navigationView': {
        templateUrl: 'templates/generic/change-pass.html',
        controller: 'ChangePassCtrl'
      }
    }
  })

  .state('menu-cliente.meu-cadastro', {
    url: '/meu-cadastro',
    views: {
      'navigationView': {
        templateUrl: 'templates/cliente/cliente.html',
        controller: 'ClienteCtrl'
      }
    }
  })


  .state('menu-cliente.meus-transportes', {
    url: '/meus-transportes',
    views: {
      'navigationView': {
        templateUrl: 'templates/cliente/meus-transportes.html',
        controller: 'MeusTransportesCtrl'
      }
    }
  })


  .state('menu-cliente.caracteristicas-vinculo', {
    url: '/caracteristicas-vinculo/:vei_cd_veiculo',
    views: {
      'navigationView': {
        templateUrl: 'templates/cliente/caracteristicas-vinculo.html',
        controller: 'CaracteristicasVinculoCtrl'
      }
    }
  })
  .state('menu-cliente.home', {
    url: '/home',
    views: {
      'navigationView': {
        templateUrl: 'templates/principal/home.html',
        controller: 'TransportesCtrl'
      }
    }
  })
  .state('menu-fornecedor.home', {
    url: '/home',
    views: {
      'navigationView': {
        templateUrl: 'templates/principal/home.html',
        controller: 'TransportesCtrl'
      }
    }
  })
  .state('transportes', {
    url: '/home',
    templateUrl: 'templates/principal/home.html',
    controller: 'TransportesCtrl'
  })


  $urlRouterProvider.otherwise('/home');
});
