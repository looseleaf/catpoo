'use strict';

angular.module('catpooApp')
  .controller('MainmenuCtrl', function ($scope) {
    $scope.mmnavs = [
      {routename: 'projects', name: 'Projects', description: 'List of all Projects'},
      {routename: '', name: 'Tasks', description: 'List of all Tasks'},
      {routename: '', name: 'Wip', description: 'List of all Work in Progress'},
      {routename: '', name: 'Pending Commits', description: 'List of local Pending Commits'},
      {routename: '', name: 'Search', description: 'Search my pile of catpoo'},
      {routename: '', name: 'Notifications', description: 'Notifications to me'}
    ];
  });
