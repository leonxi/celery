var express = require('express');
var router = express.Router();
var validator = require('validator');
var models = require('../models');
var TimeSheetModel = models.TimeSheet;
var TimeSheet = require('../proxy').TimeSheet;

/**
 * @api {get} /timesheet 全部考勤表
 * @apiName GetTimeSheetList
 * @apiGroup TimeSheet
 *
 * @apiSuccess {Object[]} years                                   年度列表.
 * @apiSuccess {String}   years.year                              所属年度(yyyy).
 * @apiSuccess {Object[]} years.months                            月度列表.
 * @apiSuccess {String}   years.months.month                      所属月度(MM).
 * @apiSuccess {Object}   years.months.timesheet                  考勤表.
 * @apiSuccess {Number}   years.months.timesheet.employeescount   考勤表员工数.
 * @apiSuccess {Number}   years.months.timesheet.workhourssum_1   考勤表员工工作时间汇总(周一至周五工作日).
 * @apiSuccess {Number}   years.months.timesheet.workhourssum_2   考勤表员工工作时间汇总(周六，周日加班).
 * @apiSuccess {Number}   years.months.timesheet.workhourssum_3   考勤表员工工作时间汇总(国定假加班).
 * @apiSuccess {Number}   years.months.timesheet.workhourssum_4   考勤表员工工作时间汇总(周一至周五工作日加班).
 * @apiSuccess {Number}   years.months.timesheet.takeoffhourssum  考勤表员工调休时间汇总.
 * @apiSuccess {Number}   years.months.timesheet.leavehourssum    考勤表员工请假时间汇总.
 */
router.get('/', function(req, res, next) {
  TimeSheetModel.find({}, function(err, timesheets) {
    if (err) {
      return next(err);
    }
    
    res.json(timesheets);
  });
});

/**
 * @api {get} /timesheet/:year 年度考勤表
 * @apiName GetTimeSheetListByYear
 * @apiGroup TimeSheet
 *
 * @apiParam {String} year 所属年度.
 *
 * @apiSuccess {String}   year                              所属年度(yyyy).
 * @apiSuccess {Object[]} months                            月度列表.
 * @apiSuccess {String}   months.month                      所属月度(MM).
 * @apiSuccess {Object}   months.timesheet                  考勤表.
 * @apiSuccess {Number}   months.timesheet.employeescount   考勤表员工数.
 * @apiSuccess {Number}   months.timesheet.workhourssum_1   考勤表员工工作时间汇总(周一至周五工作日).
 * @apiSuccess {Number}   months.timesheet.workhourssum_2   考勤表员工工作时间汇总(周六，周日加班).
 * @apiSuccess {Number}   months.timesheet.workhourssum_3   考勤表员工工作时间汇总(国定假加班).
 * @apiSuccess {Number}   months.timesheet.workhourssum_4   考勤表员工工作时间汇总(周一至周五工作日加班).
 * @apiSuccess {Number}   months.timesheet.takeoffhourssum  考勤表员工调休时间汇总.
 * @apiSuccess {Number}   months.timesheet.leavehourssum    考勤表员工请假时间汇总.
 */
router.get('/:year', function(req, res, next) {
  TimeSheetModel.find({"year": year}, function(err, timesheets) {
    if (err) {
      return next(err);
    }
    
    res.json(timesheets);
  });
});

/**
 * @api {get} /timesheet/:year/:month 月度考勤表
 * @apiName GetTimeSheetListByMonth
 * @apiGroup TimeSheet
 *
 * @apiParam {String} year  所属年度.
 * @apiParam {String} month 所属月度.
 *
 * @apiSuccess {String}   year                                    所属年度(yyyy).
 * @apiSuccess {String}   month                                   所属月度(MM).
 * @apiSuccess {Number}   employeescount                          考勤表员工数.
 * @apiSuccess {Number}   workhourssum_1                          考勤表员工工作时间汇总(周一至周五工作日).
 * @apiSuccess {Number}   workhourssum_2                          考勤表员工工作时间汇总(周六，周日加班).
 * @apiSuccess {Number}   workhourssum_3                          考勤表员工工作时间汇总(国定假加班).
 * @apiSuccess {Number}   workhourssum_4                          考勤表员工工作时间汇总(周一至周五工作日加班).
 * @apiSuccess {Number}   takeoffhourssum                         考勤表员工调休时间汇总.
 * @apiSuccess {Number}   leavehourssum                           考勤表员工请假时间汇总.
 * @apiSuccess {Object[]} employees                               考勤表员工.
 * @apiSuccess {String}   employees.employeename                  考勤表员工名称.
 * @apiSuccess {Object[]} employees.days                          考勤表员工考勤.
 * @apiSuccess {String}   employees.days.day                      考勤表员工考勤日(dd).
 * @apiSuccess {Number}   employees.days.workhours_1              考勤表员工考勤日工作时间(周一至周五工作日).
 * @apiSuccess {Number}   employees.days.workhours_2              考勤表员工考勤日工作时间(周六，周日加班).
 * @apiSuccess {Number}   employees.days.workhours_3              考勤表员工考勤日工作时间(国定假加班).
 * @apiSuccess {Number}   employees.days.workhours_4              考勤表员工考勤日工作时间(周一至周五工作日加班).
 * @apiSuccess {Number}   employees.days.takeoffhours             考勤表员工考勤日调休时间.
 * @apiSuccess {Number}   employees.days.leavehours               考勤表员工考勤日请假时间.
 */
router.get('/:year/:month', function(req, res, next) {
  TimeSheetModel.find({"year": year, "month": month}, function(err, timesheets) {
    if (err) {
      return next(err);
    }
    
    res.json(timesheets);
  });
});

/**
 * @api {put} /timesheet/:year/:month 新建/更新月度考勤表
 * @apiName NewOrSaveMonthlyTimeSheet
 * @apiGroup TimeSheet
 *
 * @apiParam {String}   year                                    所属年度(yyyy).
 * @apiParam {String}   month                                   所属月度(MM).
 * @apiParam {Object[]} employees                               考勤表员工.
 * @apiParam {String}   employees.employeename                  考勤表员工名称.
 * @apiParam {Object[]} employees.days                          考勤表员工考勤.
 * @apiParam {String}   employees.days.day                      考勤表员工考勤日(dd).
 * @apiParam {Number}   employees.days.workhours_1              考勤表员工考勤日工作时间(周一至周五工作日).
 * @apiParam {Number}   employees.days.workhours_2              考勤表员工考勤日工作时间(周六，周日加班).
 * @apiParam {Number}   employees.days.workhours_3              考勤表员工考勤日工作时间(国定假加班).
 * @apiParam {Number}   employees.days.workhours_4              考勤表员工考勤日工作时间(周一至周五工作日加班).
 * @apiParam {Number}   employees.days.takeoffhours             考勤表员工考勤日调休时间.
 * @apiParam {Number}   employees.days.leavehours               考勤表员工考勤日请假时间.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */
router.put('/:year/:month', function(req, res, next) {
  console.log(req.params.year);
  console.log(req.params.month);
  console.log(req.body);
  var year = req.params.year;
  var month = req.params.month;
  var employees = req.body.employees;

  TimeSheet.newAndSave(year, month, employees, function(err) {
    if (err) {
      console.error('TimeSheet ' + year + '-' + month + ' saved error: ', err.message);
      return next(err);
    }

    console.log('TimeSheet ' + year + '-' + month + ' saved!');
    res.json('{}');
  });
});

module.exports = router;
