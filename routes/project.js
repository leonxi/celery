var express = require('express');
var router = express.Router();
var validator = require('validator');
var Project = require('../proxy').Project;
var MonthlyCost = require('../proxy').MonthlyCost;
var _ = require('lodash');

/**
 * @api {get} /project/:username/list 指定用户所属项目
 * @apiName GetUserProjectList
 * @apiGroup Project
 *
 * @apiParam {String} username 用户名称.
 *
 * @apiSuccess {Object[]} projects                              项目列表.
 * @apiSuccess {String}   projects._id                          项目ID.
 * @apiSuccess {String}   projects.name                         项目名称.
 * @apiSuccess {Object[]} projects.members                      项目成员列表.
 * @apiSuccess {String}   projects.members.username             项目成员用户名.
 * @apiSuccess {String}   projects.members.name                 项目成员名称.
 * @apiSuccess {String}   projects.members.role                 项目成员角色.
 * @apiSuccess {Object[]} projects.monthlycosts                 项目月度成本列表.
 * @apiSuccess {String}   projects.monthlycosts.year            项目月度成本归属年(yyyy).
 * @apiSuccess {String}   projects.monthlycosts.month           项目月度成本归属月(MM).
 * @apiSuccess {Number}   projects.monthlycosts.memberscount    项目月度成本参与成员数.
 * @apiSuccess {Number}   projects.monthlycosts.workhourssum_1  项目月度成本工作时间汇总(周一至周五工作日).
 * @apiSuccess {Number}   projects.monthlycosts.workhourssum_2  项目月度成本工作时间汇总(周六，周日加班).
 * @apiSuccess {Number}   projects.monthlycosts.workhourssum_3  项目月度成本工作时间汇总(国定假加班).
 * @apiSuccess {Number}   projects.monthlycosts.workhourssum_4  项目月度成本工作时间汇总(周一至周五工作日加班).
 * @apiSuccess {Number}   projects.monthlycosts.membercostsum_1 项目月度成本人工成本汇总(周一至周五工作日).
 * @apiSuccess {Number}   projects.monthlycosts.membercostsum_2 项目月度成本人工成本汇总(周六，周日加班费).
 * @apiSuccess {Number}   projects.monthlycosts.membercostsum_3 项目月度成本人工成本汇总(国定假加班费).
 * @apiSuccess {Number}   projects.monthlycosts.fundssum        项目月度成本经费汇总.
 * @apiSuccess {Number}   projects.monthlycosts.otherchargessum 项目月度成本其它费用汇总.
 * @apiSuccess {Number}   projects.monthlycosts.outsourcessum   项目月度成本外协费用汇总.
 */
router.get('/:username/list', function(req, res, next) {
  Project.getProjectsByUserId(function(err, projects, count) {
    if (err) {
      return next(err);
    }
    res.json(projects);
  });
});

/**
 * @api {get} /project/:id 项目详情
 * @apiName GetProject
 * @apiGroup Project
 *
 * @apiParam {String} id 项目ID.
 *
 * @apiSuccess {String}   _id                          项目ID.
 * @apiSuccess {String}   name                         项目名称.
 * @apiSuccess {Object[]} members                      项目成员列表.
 * @apiSuccess {String}   members.username             项目成员用户名.
 * @apiSuccess {String}   members.name                 项目成员名称.
 * @apiSuccess {String}   members.role                 项目成员角色.
 * @apiSuccess {Object[]} monthlycosts                 项目月度成本列表.
 * @apiSuccess {String}   monthlycosts.year            项目月度成本归属年(yyyy).
 * @apiSuccess {String}   monthlycosts.month           项目月度成本归属月(MM).
 * @apiSuccess {Number}   monthlycosts.memberscount    项目月度成本参与成员数.
 * @apiSuccess {Number}   monthlycosts.workhourssum_1  项目月度成本工作时间汇总(周一至周五工作日).
 * @apiSuccess {Number}   monthlycosts.workhourssum_2  项目月度成本工作时间汇总(周六，周日加班).
 * @apiSuccess {Number}   monthlycosts.workhourssum_3  项目月度成本工作时间汇总(国定假加班).
 * @apiSuccess {Number}   monthlycosts.workhourssum_4  项目月度成本工作时间汇总(周一至周五工作日加班).
 * @apiSuccess {Number}   monthlycosts.membercostsum_1 项目月度成本人工成本汇总(周一至周五工作日).
 * @apiSuccess {Number}   monthlycosts.membercostsum_2 项目月度成本人工成本汇总(周六，周日加班费).
 * @apiSuccess {Number}   monthlycosts.membercostsum_3 项目月度成本人工成本汇总(国定假加班费).
 * @apiSuccess {Number}   monthlycosts.fundssum        项目月度成本经费汇总.
 * @apiSuccess {Number}   monthlycosts.otherchargessum 项目月度成本其它费用汇总.
 * @apiSuccess {Number}   monthlycosts.outsourcessum   项目月度成本外协费用汇总.
 */
router.get('/:id', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

/**
 * @api {get} /project/:id/:year/:month 项目月度成本
 * @apiName GetProjectMonthlyCost
 * @apiGroup Project
 *
 * @apiParam {String} id    项目ID.
 * @apiParam {String} year  项目月度成本归属年.
 * @apiParam {String} month 项目月度成本归属月.
 *
 * @apiSuccess {Object}   project                      项目详情.
 * @apiSuccess {String}   project._id                  项目ID.
 * @apiSuccess {String}   project.name                 项目名称.
 * @apiSuccess {String}   year                         项目月度成本归属年(yyyy).
 * @apiSuccess {String}   month                        项目月度成本归属月(MM).
 * @apiSuccess {Number}   memberscount                 项目月度成本参与成员数.
 * @apiSuccess {Number}   workhourssum_1               项目月度成本工作时间汇总(周一至周五工作日).
 * @apiSuccess {Number}   workhourssum_2               项目月度成本工作时间汇总(周六，周日加班).
 * @apiSuccess {Number}   workhourssum_3               项目月度成本工作时间汇总(国定假加班).
 * @apiSuccess {Number}   workhourssum_4               项目月度成本工作时间汇总(周一至周五工作日加班).
 * @apiSuccess {Number}   membercostsum_1              项目月度成本人工成本汇总(周一至周五工作日).
 * @apiSuccess {Number}   membercostsum_2              项目月度成本人工成本汇总(周六，周日加班费).
 * @apiSuccess {Number}   membercostsum_3              项目月度成本人工成本汇总(国定假加班费).
 * @apiSuccess {Number}   fundssum                     项目月度成本经费汇总.
 * @apiSuccess {Number}   otherchargessum              项目月度成本其它费用汇总.
 * @apiSuccess {Number}   outsourcessum                项目月度成本外协费用汇总.
 * @apiSuccess {Object[]} members                      项目月度成本参与成员列表.
 * @apiSuccess {String}   members.username             项目月度成本参与成员用户名.
 * @apiSuccess {String}   members.name                 项目月度成本参与成员名称.
 * @apiSuccess {String}   members.role                 项目月度成本参与成员角色.
 * @apiSuccess {Number}   members.salary               项目月度成本参与成员月薪资.
 * @apiSuccess {Number}   members.salarymonth          项目月度成本参与成员薪资月数(年薪资13月).
 * @apiSuccess {Number}   members.monthlycostshare     项目月度成本参与成员月均摊成本.
 * @apiSuccess {Object[]} workhours                    项目月度成本参与成员工作时间.
 * @apiSuccess {Object}   workhours.member             项目月度成本参与成员工作时间所属成员.
 * @apiSuccess {String}   workhours.member.username    项目月度成本参与成员工作时间所属成员用户名.
 * @apiSuccess {String}   workhours.member.name        项目月度成本参与成员工作时间所属成员名称.
 * @apiSuccess {String}   workhours.member.role        项目月度成本参与成员工作时间所属成员角色.
 * @apiSuccess {Object}   workhours.list_1             项目月度成本参与成员工作时间列表(周一至周五工作日).
 * @apiSuccess {String}   workhours.list_1.year        项目月度成本参与成员工作时间列表(周一至周五工作日)归属年(yyyy).
 * @apiSuccess {String}   workhours.list_1.month       项目月度成本参与成员工作时间列表(周一至周五工作日)归属月(MM).
 * @apiSuccess {String}   workhours.list_1.day         项目月度成本参与成员工作时间列表(周一至周五工作日)归属日(DD).
 * @apiSuccess {Number}   workhours.list_1.hours       项目月度成本参与成员工作时间列表(周一至周五工作日)工作小时(Hours).
 * @apiSuccess {Object}   workhours.list_2             项目月度成本参与成员工作时间列表(周六，周日加班).
 * @apiSuccess {String}   workhours.list_2.year        项目月度成本参与成员工作时间列表(周六，周日加班)归属年(yyyy).
 * @apiSuccess {String}   workhours.list_2.month       项目月度成本参与成员工作时间列表(周六，周日加班)归属月(MM).
 * @apiSuccess {String}   workhours.list_2.day         项目月度成本参与成员工作时间列表(周六，周日加班)归属日(DD).
 * @apiSuccess {Number}   workhours.list_2.hours       项目月度成本参与成员工作时间列表(周六，周日加班)工作小时(Hours).
 * @apiSuccess {Object}   workhours.list_3             项目月度成本参与成员工作时间列表(国定假加班).
 * @apiSuccess {String}   workhours.list_3.year        项目月度成本参与成员工作时间列表(国定假加班)归属年(yyyy).
 * @apiSuccess {String}   workhours.list_3.month       项目月度成本参与成员工作时间列表(国定假加班)归属月(MM).
 * @apiSuccess {String}   workhours.list_3.day         项目月度成本参与成员工作时间列表(国定假加班)归属日(DD).
 * @apiSuccess {Number}   workhours.list_3.hours       项目月度成本参与成员工作时间列表(国定假加班)工作小时(Hours).
 * @apiSuccess {Object}   workhours.list_4             项目月度成本参与成员工作时间列表(周一至周五工作日加班).
 * @apiSuccess {String}   workhours.list_4.year        项目月度成本参与成员工作时间列表(周一至周五工作日加班)归属年(yyyy).
 * @apiSuccess {String}   workhours.list_4.month       项目月度成本参与成员工作时间列表(周一至周五工作日加班)归属月(MM).
 * @apiSuccess {String}   workhours.list_4.day         项目月度成本参与成员工作时间列表(周一至周五工作日加班)归属日(DD).
 * @apiSuccess {Number}   workhours.list_4.hours       项目月度成本参与成员工作时间列表(周一至周五工作日加班)工作小时(Hours).
 */
router.get('/:id/:year/:month', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

/**
 * @api {put} /project 创建/更新项目
 * @apiName NewOrSaveProject
 * @apiGroup Project
 *
 * @apiParam {String} name  项目名称.
 *
 * @apiSuccess {String}   _id                          项目ID.
 * @apiSuccess {String}   name                         项目名称.
 * @apiSuccess {Object[]} members                      项目成员列表.
 * @apiSuccess {String}   members.username             项目成员用户名.
 * @apiSuccess {String}   members.name                 项目成员名称.
 * @apiSuccess {String}   members.role                 项目成员角色.
 */
router.put('/', function(req, res, next) {
  var name = validator.trim(req.body.name);

  Project.newAndSave(name, function(err, project) {
    if (err) {
      console.error('Project ' + name + ' saved error: ', err.message);
      return next(err);
    }
    
    console.log('Project ' + name + ' saved!');
    res.json(project);
  });
});

/**
 * @api {put} /project/:id/:year/:month/member 创建/更新项目参与成员
 * @apiName NewOrSaveProjectMember
 * @apiGroup Project
 *
 * @apiParam {String} id          项目ID.
 * @apiParam {String} year        项目月度成本归属年.
 * @apiParam {String} month       项目月度成本归属月.
 * @apiParam {String} [username]  成员用户名(可选).
 * @apiParam {String} name        成员名称.
 * @apiParam {String} [role]      成员角色(可选).
 *
 * @apiSuccess {Object}   project                      项目详情.
 * @apiSuccess {String}   project._id                  项目ID.
 * @apiSuccess {String}   project.name                 项目名称.
 * @apiSuccess {String}   year                         项目月度成本归属年(yyyy).
 * @apiSuccess {String}   month                        项目月度成本归属月(MM).
 * @apiSuccess {Object[]} members                      项目成员列表.
 * @apiSuccess {String}   members.username             项目成员用户名.
 * @apiSuccess {String}   members.name                 项目成员名称.
 * @apiSuccess {String}   members.role                 项目成员角色.
 */
router.put('/:id/:year/:month/member', function(req, res, next) {
  var id    = validator.trim(req.params.id);
  var year  = validator.trim(req.params.year);
  var month = validator.trim(req.params.month);
  var username = _.isUndefined(req.body.username) ? null : validator.trim(req.body.username);
  var name = validator.trim(req.body.name);
  var role = _.isUndefined(req.body.role) ? null : validator.trim(req.body.role);
  
  // Default role 'Member'
  if (role === '') {
    role = 'Member';
  }
  
  MonthlyCost.newAndSave(id, year, month, username, name, role, function(err, monthlycost) {
    if (err) {
      console.error('MonthlyCost ' + id + ' saved error: ', err.message);
      return next(err);
    }
    
    console.log('MonthlyCost ' + id + ' saved!');
    res.json(monthlycost);
  });
});

/**
 * @api {delete} /project/:id/:year/:month/member 删除项目参与成员
 * @apiName DeleteProjectMember
 * @apiGroup Project
 *
 * @apiParam {String} id          项目ID.
 * @apiParam {String} year        项目月度成本归属年.
 * @apiParam {String} month       项目月度成本归属月.
 * @apiParam {String} username    成员用户名.
 *
 * @apiSuccess {Object}   project                      项目详情.
 * @apiSuccess {String}   project._id                  项目ID.
 * @apiSuccess {String}   project.name                 项目名称.
 * @apiSuccess {String}   year                         项目月度成本归属年(yyyy).
 * @apiSuccess {String}   month                        项目月度成本归属月(MM).
 * @apiSuccess {Object[]} members                      项目成员列表.
 * @apiSuccess {String}   members.username             项目成员用户名.
 * @apiSuccess {String}   members.name                 项目成员名称.
 * @apiSuccess {String}   members.role                 项目成员角色.
 */
router.delete('/:id/:year/:month/member', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

/**
 * @api {put} /project/:id/:year/:month/:username/:day/list1 创建/更新项目参与成员工作时间(周一至周五工作日)
 * @apiName NewOrSaveProjectMemberWorkHours1
 * @apiGroup Project
 *
 * @apiParam {String} id          项目ID.
 * @apiParam {String} year        项目月度成本归属年.
 * @apiParam {String} month       项目月度成本归属月.
 * @apiParam {String} username    成员用户名.
 * @apiParam {String} day         项目月度成本归属日.
 * @apiParam {String} hours       项目月度成本工作小时.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */
router.put('/:id/:year/:month/:username/:day/list1', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

/**
 * @api {put} /project/:id/:year/:month/:username/:day/list2 创建/更新项目参与成员工作时间(周六，周日加班)
 * @apiName NewOrSaveProjectMemberWorkHours2
 * @apiGroup Project
 *
 * @apiParam {String} id          项目ID.
 * @apiParam {String} year        项目月度成本归属年.
 * @apiParam {String} month       项目月度成本归属月.
 * @apiParam {String} username    成员用户名.
 * @apiParam {String} day         项目月度成本归属日.
 * @apiParam {String} hours       项目月度成本工作小时.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */
router.put('/:id/:year/:month/:username/:day/list2', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

/**
 * @api {put} /project/:id/:year/:month/:username/:day/list3 创建/更新项目参与成员工作时间(国定假加班)
 * @apiName NewOrSaveProjectMemberWorkHours3
 * @apiGroup Project
 *
 * @apiParam {String} id          项目ID.
 * @apiParam {String} year        项目月度成本归属年.
 * @apiParam {String} month       项目月度成本归属月.
 * @apiParam {String} username    成员用户名.
 * @apiParam {String} day         项目月度成本归属日.
 * @apiParam {String} hours       项目月度成本工作小时.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */
router.put('/:id/:year/:month/:username/:day/list3', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

/**
 * @api {put} /project/:id/:year/:month/:username/:day/list4 创建/更新项目参与成员工作时间(周一至周五工作日加班)
 * @apiName NewOrSaveProjectMemberWorkHours4
 * @apiGroup Project
 *
 * @apiParam {String} id          项目ID.
 * @apiParam {String} year        项目月度成本归属年.
 * @apiParam {String} month       项目月度成本归属月.
 * @apiParam {String} username    成员用户名.
 * @apiParam {String} day         项目月度成本归属日.
 * @apiParam {String} hours       项目月度成本工作小时.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */
router.put('/:id/:year/:month/:username/:day/list4', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

/**
 * @api {delete} /project/:id/:year/:month/:username/:day/list1 删除项目参与成员工作时间(周一至周五工作日)
 * @apiName DeleteProjectMemberWorkHours1
 * @apiGroup Project
 *
 * @apiParam {String} id          项目ID.
 * @apiParam {String} year        项目月度成本归属年.
 * @apiParam {String} month       项目月度成本归属月.
 * @apiParam {String} username    成员用户名.
 * @apiParam {String} day         项目月度成本归属日.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */
router.delete('/:id/:year/:month/:username/:day/list1', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

/**
 * @api {delete} /project/:id/:year/:month/:username/:day/list2 删除项目参与成员工作时间(周六，周日加班)
 * @apiName DeleteProjectMemberWorkHours2
 * @apiGroup Project
 *
 * @apiParam {String} id          项目ID.
 * @apiParam {String} year        项目月度成本归属年.
 * @apiParam {String} month       项目月度成本归属月.
 * @apiParam {String} username    成员用户名.
 * @apiParam {String} day         项目月度成本归属日.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */
router.delete('/:id/:year/:month/:username/:day/list2', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

/**
 * @api {delete} /project/:id/:year/:month/:username/:day/list3 删除项目参与成员工作时间(国定假加班)
 * @apiName DeleteProjectMemberWorkHours3
 * @apiGroup Project
 *
 * @apiParam {String} id          项目ID.
 * @apiParam {String} year        项目月度成本归属年.
 * @apiParam {String} month       项目月度成本归属月.
 * @apiParam {String} username    成员用户名.
 * @apiParam {String} day         项目月度成本归属日.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */
router.delete('/:id/:year/:month/:username/:day/list3', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

/**
 * @api {delete} /project/:id/:year/:month/:username/:day/list4 删除项目参与成员工作时间(周一至周五工作日加班)
 * @apiName DeleteProjectMemberWorkHours4
 * @apiGroup Project
 *
 * @apiParam {String} id          项目ID.
 * @apiParam {String} year        项目月度成本归属年.
 * @apiParam {String} month       项目月度成本归属月.
 * @apiParam {String} username    成员用户名.
 * @apiParam {String} day         项目月度成本归属日.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 */
router.delete('/:id/:year/:month/:username/:day/list4', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

module.exports = router;
