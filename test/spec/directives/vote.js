'use strict';

describe('Directive: vote', function() {
  beforeEach(module('CondoSolApp'));

  var element;

  it('should make hidden element visible', inject(function($rootScope, $compile) {
    element = angular.element('<vote></vote>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the vote directive');
  }));
});
