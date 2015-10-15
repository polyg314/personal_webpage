myApp.config(function($stateProvider, $urlRouterProvider){          
      $stateProvider
        .state('main', {
            url: "/main",
            templateUrl: "../templates/main.html",
            abstract: true,
            data: {
              requireLogin: true // this property will apply to all children of 'main'
            }
        })
        .state('main.home', {
              url: "/home",
              templateUrl: "../templates/home.html",
        })
        .state('main.blog', {
              url: "/blog",
              templateUrl: "../templates/blog.html",
        })
        .state('main.portfolio', {
              url: "/portfolio",
              templateUrl: "../templates/portfolio.html",
        })
        .state('main.contact', {
              url: "/contact",
              templateUrl: "../templates/contact.html",
        });
        $urlRouterProvider.otherwise("/main/home");
});