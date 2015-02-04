'use strict';

describe('Controller: ConfiglistCtrl', function () {

  // load the controller's module
  beforeEach(module('rwConfigGeneratorApp'));

  var ConfiglistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfiglistCtrl = $controller('ConfiglistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
