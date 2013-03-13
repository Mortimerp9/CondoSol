'use strict';

describe('Controller: IssueCtrl', function() {

  // load the controller's module
  beforeEach(module('CondoSolApp'));

  var IssueCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    IssueCtrl = $controller('IssueCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
