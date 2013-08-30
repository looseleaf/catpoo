'use strict';

angular.module('catpooApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.projects = [
    	 {id: 1, name: "Project1", authority: "Project1 Authority", workorder: "12345678woABCD"}
    	,{id: 2, name: "Project1", authority: "Project2 Authority", workorder: "22345678woABCD"}
    	,{id: 3, name: "Project1", authority: "Project3 Authority", workorder: "32345678woABCD"}
    	,{id: 4, name: "Project1", authority: "Project4 Authority", workorder: "42345678woABCD"}
    	,{id: 5, name: "Project1", authority: "Project5 Authority", workorder: "52345678woABCD"}
    	,{id: 6, name: "Project1", authority: "Project6 Authority", workorder: "52345678woABCD"}
    ];
  });
