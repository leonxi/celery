var EventProxy  = require('eventproxy');
var models      = require('../models');
var Project     = models.Project;
var MonthlyCost = models.MonthlyCost;
var _ = require('lodash');

exports.newAndSave = function (id, year, month, username, name, role, callback) {
  var ep = EventProxy.create();
  ep.fail(callback);
  
  Project.findOne({_id: id}, ep.done(function (project) {
    if (project) {
      
      MonthlyCost.findOne({project:{_id: project.id}, year: year, month: month}, ep.done(function(monthlycost) {
        if (monthlycost) {
          _.merge(monthlycost.members, [{username: username, name: name, role: role}]);
          
          monthlycost.save(callback);
        } else {
          var monthlycost = new MonthlyCost();
          
          monthlycost.project._id = project._id;
          monthlycost.project.name = project.name;
          monthlycost.year = year;
          monthlycost.month = month;
          monthlycost.members = [{username: username, name: name, role: role}];
          
          monthlycost.save(callback);
        }
      }));
    } else {
      ep.fail(callback);
    }
  }));
};