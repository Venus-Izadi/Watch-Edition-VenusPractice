'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  SessionsPage = require('./pages/sessionsPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  sessionsPage = new SessionsPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    sessions: 'sessions'
  },

  home: function() {
    this.renderView(homePage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  },

  sessions: function(){
    this.renderView(sessionsPage);
  }
});

module.exports = AppRouter;
