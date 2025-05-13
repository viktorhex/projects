'use strict';

angular.
  module('projectItemDetails').
  component('projectItemDetails', {
    template: 'Detail view: <div>{{$ctrl.project.name}}</div> <div>{{$ctrl.project.description}}</div>',
    controller: ['$routeParams', 'Project',
      function ProjectItemDetailsController($routeParams, Project) {
        const projectId = $routeParams.projectId;
        var self = this;
        Project.findById(projectId).then(function(project){
          self.project = project;
        })
      }
    ]
  });
