'use strict';

describe('projectItemList', function () {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('projectItemList'));

  // Test the controller
  describe('ProjectItemListController', function () {
    var $httpBackend, ctrl;

    beforeEach(inject(function ($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/projects.json')
        .respond([{ name: 'AngularJS Demo' }, { name: 'Nextjs Demo' }]);

      ctrl = $componentController('projectItemList');
    }));

    it('should create a `projects` property with 2 projects fetched with `$http`', function () {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.projects).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.projects).toEqual([{ name: 'AngularJS Demo' }, { name: 'Nextjs Demo' }]);
    });

  });

});