var EventProxy = require('eventproxy');
var models     = require('../models');
var TimeSheet  = models.TimeSheet;

exports.newAndSave = function (year, month, employees, callback) {
  var timesheet        = new TimeSheet();
  timesheet.year       = year;
  timesheet.month      = month;
  timesheet.employees  = employees;

  timesheet.save(callback);
};