'use strict';

var SessionsPage = require('../../src/js/pages/sessionsPage.js'),
  Session = require('../../src/js/models/session.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app'),
  sessionsConfig = require('../../src/js/config/sessionsConfig');

global.App = App;

describe('sessions', function() {

  var sessionsPage;

  beforeEach(function () {
    global.App.router = new Router();
    sessionsPage = new SessionsPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      sessionsPage.setButtonEvents();
    });

    describe('left', function () {

      it('should navigates to the contacts page', function(){
        spyOn(global.App.router, 'navigate');
        sessionsPage.trigger('left');
        expect(global.App.router.navigate).toHaveBeenCalledWith('contacts', true);
      });
    });

    describe('right', function () {

      it('should navigate to the home page', function(){
        spyOn(global.App.router, 'navigate');
        sessionsPage.trigger('right');
        expect(global.App.router.navigate).toHaveBeenCalledWith('',true);
      });
    });
  });

  describe('adding element into collection', function(){
    it('should rerender the new element', function(){
      sessionsPage.sessionCollection.push({
        description: 'Level Up event 4'
      });
      expect(sessionsPage.el.innerHTML).toContain('Level Up event 4');
    });
  });

  describe('initializing the page', function(){
    it('should initialize the collection with default data', function(){
      expect(sessionsPage.sessionCollection.at(0).attributes).toEqual(sessionsConfig[0]);
      expect(sessionsPage.sessionCollection.at(1).attributes).toEqual(sessionsConfig[1]);
      expect(sessionsPage.sessionCollection.at(2).attributes).toEqual(sessionsConfig[2]);
    });
  })

  describe('rendering', function () {

    it('should show Sessions title', function () {
      sessionsPage.render();
      var html = sessionsPage.el.innerHTML;
      expect(html).toContainText('LevelUp sessions in this edition');
    });

    it('returns the view object', function() {
      expect(sessionsPage.render()).toEqual(sessionsPage);
    });

  });

});
