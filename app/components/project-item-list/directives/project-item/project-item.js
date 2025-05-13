'use strict';

angular.
  module('projectItemList').
  directive('projectItem', ['$location', function ($location) {
    return {
      restrict: 'E',
      scope: {
        name: '@',
        description: '@',
        id: '@'
      },
      template: `
        <div class="project-item" ng-click="navigateToProject(id)">
          <div class="row">
            <div class="col-12">{{ name }}</div>
            <div class="col-12">{{ description }}</div>
            <div>Test Compilation: {{ 1 + 1 }}</div>
          </div>
        </div>
      `,
      link: function (scope, element, attrs) {
        scope.navigateToProject = function (id) {
          $location.path('/projects/' + id);
        };
      }
    };
  }]);