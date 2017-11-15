/* global angular */
(function() {
'use strict';

angular.module('SenthilFirstPlugin', [])
  .directive('senthilFirstPlugin', ['', function() {
    return {
      template: 'Name: senthil <br /> Street: Bangalore'
    };
  }]);
})();
