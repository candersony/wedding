'use strict';

describe('Controller: BigdayCtrl', function () {

  // load the controller's module
  beforeEach(module('weddingApp'));

  var BigdayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BigdayCtrl = $controller('BigdayCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
