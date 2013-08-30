'use strict';

angular.module('catpooApp')
  .controller('ProjectsWorkorderCtrl', function ($scope, $routeParams) {
    $scope.workorder = $routeParams.workorder;
  });
