'use strict';

describe('Controller: SaveTheDateCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingApp'));

  var SaveTheDateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SaveTheDateCtrl = $controller('SaveTheDateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
