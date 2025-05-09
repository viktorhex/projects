'use strict';

angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/home', {
          template: '<project-item-list></project-item-list>'
        })
        .otherwise('/home');
    }
  ]);
