var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', function callback() {
  console.log("Connection error");
});

var host = process.env.MONGO_HOST || 'mongodb';
var port = process.env.MONGO_PORT || '27017';
var database = process.env.MONGO_DATABASE || 'celery';

var username = process.env.MONGO_USERNAME || 'root';
var password = process.env.MONGO_PASSWORD || '1234';

mongoose.connect('mongodb://' + username + ':' + password + '@' + host + ':' + port + '/' + database);


require('./project');
require('./user');

exports.Project      = mongoose.model('Project');
exports.User         = mongoose.model('User');
