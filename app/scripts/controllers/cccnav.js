'use strict';

angular.module('catpooApp')
  .controller('cccnavCtrl', function ($scope) {
    $scope.someThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.isCollapsed = true;
  });