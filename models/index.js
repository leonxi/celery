var mongoose = require('mongoose');

var host = process.env.MONGO_HOST || 'mongodb';
var port = process.env.MONGO_PORT || '27017';
var database = process.env.MONGO_DATABASE || 'celery';

var username = process.env.MONGO_USERNAME || 'xiaoji';
var password = process.env.MONGO_PASSWORD || '1234';

var mongodburl = 'mongodb://' + username + ':' + password + '@' + host + ':' + port + '/' + database;

mongoose.connect(mongodburl, {
  server: {poolSize: 20}
}, function(err) {
  if (err) {
    console.error('mongodb connect to %s error: ', mongodburl, err.message);
    process.exit(1);
  } else {
    console.log('mongodb connect successfully on port ' + port);
  }
});

mongoose.set('debug', true);

require('./project');
require('./member');
require('./user');
require('./timesheet');

exports.Project      = mongoose.model('Project');
exports.Member       = mongoose.model('Member');
exports.User         = mongoose.model('User');
exports.TimeSheet    = mongoose.model('TimeSheet');
