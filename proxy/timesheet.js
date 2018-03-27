var EventProxy = require('eventproxy');
var models     = require('../models');
var TimeSheet  = models.TimeSheet;

exports.newAndSave = function (year, month, employees, callback) {
  var timesheet        = new TimeSheet();
  timesheet.year       = year;
  timesheet.month      = month;
  timesheet.employees  = employees;

  console.log(year);
  console.log(month);
  console.log(employees);

  timesheet.save(callback);
};