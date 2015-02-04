'use strict';

describe('Controller: ConfigeditCtrl', function () {

  // load the controller's module
  beforeEach(module('rwConfigGeneratorApp'));

  var ConfigeditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfigeditCtrl = $controller('ConfigeditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
