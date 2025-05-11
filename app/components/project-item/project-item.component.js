'use strict';

// Register `projectItem` component, along with its associated controller and template
angular.
  module('projectItem').
  component('projectItem', {
    bindings: {
      data: '<' // One-way binding for the iterated item
    },
    templateUrl: 'components/project-item/project-item.template.html',
    controller: function () { }
  });
