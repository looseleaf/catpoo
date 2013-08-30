'use strict';

angular.module('catpooApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
/* -- this is the bad one I removed... leaving in so ya'll can see it
      .when('/mainmenu.html', {
        templateUrl: 'views/mainmenu.html.html',
        controller: 'MainmenuHtmlCtrl'
      })
*/
      .when('/mainmenu', {
        templateUrl: 'views/mainmenu.html',
        controller: 'MainmenuCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:workorder', {
        templateUrl: 'views/workorder.html',
        controller: 'ProjectsWorkorderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
