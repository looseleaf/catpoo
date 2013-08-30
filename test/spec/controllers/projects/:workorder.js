'use strict';

describe('Controller: ProjectsWorkorderCtrl', function () {

  // load the controller's module
  beforeEach(module('catpooApp'));

  var ProjectsWorkorderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectsWorkorderCtrl = $controller('ProjectsWorkorderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
