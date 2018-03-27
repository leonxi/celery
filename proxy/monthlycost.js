var EventProxy  = require('eventproxy');
var models      = require('../models');
var Project     = models.Project;
var MonthlyCost = models.MonthlyCost;
var _ = require('lodash');
var mongoose = require('mongoose');

exports.newAndSave = function (id, year, month, username, name, role, callback) {
  var ep = EventProxy.create();
  ep.fail(callback);
  
  Project.findOne({_id: id}, ep.done(function (project) {
    if (project) {
      
      MonthlyCost.findOne({project: {projectid: id}, year: year, month: month}, ep.done(function(monthlycost) {
        if (monthlycost) {
          console.log(monthlycost);
          
          function customizer(objValue, srcValue) {
            if (_.isArray(objValue)) {
              return objValue.push(srcValue);
            }
          }
          _.mergeWith(monthlycost.members, [{username: username, name: name, role: role}], customizer);
          
          monthlycost.save(callback);
        } else {
          var monthlycost = new MonthlyCost();
          
          monthlycost.project.projectid = id;
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