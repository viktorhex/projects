'use strict';

angular.
  module('core.project').
  factory('Project', ['$resource',
    function ($resource) {
      return $resource('data/projects.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
