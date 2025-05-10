'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  it('should automatically redirect to /home when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/home");
  });


  describe('home', function() {

    beforeEach(function() {
      browser.get('index.html#!/home');
    });

    it('should render home when user navigates to /home', function() {
      expect(element.all(by.css('.project-item')).first().getText()).
        toMatch(/Project X/);
    });

  });

});
