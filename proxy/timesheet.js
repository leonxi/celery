var EventProxy = require('eventproxy');
var models     = require('../models');
var TimeSheet  = models.TimeSheet;
var _ = require('lodash');

exports.getTimeSheetByMonth = function (year, month, callback) {
  TimeSheet.findOne({year: year, month: month}, callback);
};

exports.newAndSave = function (year, month, employees, callback) {
  TimeSheet.findOne({year: year, month: month}, function (err, timesheet) {
    if (err) {
      return callback(err, {});
    }

    if (timesheet) {
      _.merge(timesheet.employees, employees);

      timesheet.save(callback);
    } else {
      var timesheet        = new TimeSheet();
      timesheet.year       = year;
      timesheet.month      = month;
      timesheet.employees  = employees;

      console.log(year);
      console.log(month);
      console.log(employees);

      timesheet.save(callback);
    }
  });
};