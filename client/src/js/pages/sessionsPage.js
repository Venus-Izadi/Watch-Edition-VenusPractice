'use strict';
var sessionsConfig = require('../config/sessionsConfig.js'),

   Page = require('../framework/page'),
    SessionCollection = require('../collections/sessions.js');

var SessionsPage = Page.extend({

  id: 'sessions-page',

  template: require('../../templates/pages/sessionsPage.hbs'),

  buttonEvents: {
    left: 'goToContacts',
    right: 'goToHome'
  },

  goToHome: function(){
    global.App.router.navigate('', true);
  },

  goToContacts: function() {
    global.App.router.navigate('contacts', true);
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {
    this.$el.html(this.template(this.sessionCollection));
    return this;
  },

  initialize: function(){
    this.sessionCollection = new SessionCollection(); 
    if(this.sessionCollection.isEmpty())
    {
      this.seedSessions();  
    } 
    this.listenTo(this.sessionCollection, 'add', this.render);

  },

  seedSessions: function(){
    this.sessionCollection.add(sessionsConfig);
  }


});

module.exports = SessionsPage;
