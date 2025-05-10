'use strict';

angular.
  module('core.project').
  factory('Project', ['$resource',
    function ($resource) {
      return $resource('assets/projects.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
