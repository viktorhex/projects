'use strict';

angular.
  module('projectItemList').
  directive('projectItem', function () {
    return {
      restrict: 'E',
      scope: {
        name: '@',
        description: '@'
      },
      templateUrl: 'components/project-item-list/directives/project-item/project-item.template.html'
    };
  });
