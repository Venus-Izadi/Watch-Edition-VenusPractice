var Session = require('../models/session'),
	Config = require('../config/config.js');

var Sessions = Backbone.Firebase.Collection.extend({
  model: Session,
  url: Config.firebaseUrl + '/Session'
});

module.exports = Sessions;