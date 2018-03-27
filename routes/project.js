var express = require('express');
var router = express.Router();
var Project = require('../proxy').Project;

/**
 * @api {get} /project/:username/list 取得当前用户所有项目详情
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
 * @api {get} /project/:id 取得项目详情
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
 * @api {get} /project/:id/:year/:month 取得项目月度成本详情
 * @apiName GetProjectMonthlyCost
 * @apiGroup Project
 *
 * @apiParam {String} id    项目ID.
 * @apiParam {String} year  项目月度成本归属年.
 * @apiParam {String} month 项目月度成本归属月.
 *
 * @apiSuccess {Object}   project                      项目详情.
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
 * @apiSuccess {String}   workhours.list_2.year        项目月度成本参与成员工作时间列表(周一至周五工作日)归属年(yyyy).
 * @apiSuccess {String}   workhours.list_2.month       项目月度成本参与成员工作时间列表(周一至周五工作日)归属月(MM).
 * @apiSuccess {String}   workhours.list_2.day         项目月度成本参与成员工作时间列表(周一至周五工作日)归属日(DD).
 * @apiSuccess {Number}   workhours.list_2.hours       项目月度成本参与成员工作时间列表(周一至周五工作日)工作小时(Hours).
 * @apiSuccess {Object}   workhours.list_3             项目月度成本参与成员工作时间列表(国定假加班).
 * @apiSuccess {String}   workhours.list_3.year        项目月度成本参与成员工作时间列表(周一至周五工作日)归属年(yyyy).
 * @apiSuccess {String}   workhours.list_3.month       项目月度成本参与成员工作时间列表(周一至周五工作日)归属月(MM).
 * @apiSuccess {String}   workhours.list_3.day         项目月度成本参与成员工作时间列表(周一至周五工作日)归属日(DD).
 * @apiSuccess {Number}   workhours.list_3.hours       项目月度成本参与成员工作时间列表(周一至周五工作日)工作小时(Hours).
 * @apiSuccess {Object}   workhours.list_4             项目月度成本参与成员工作时间列表(周一至周五工作日加班).
 * @apiSuccess {String}   workhours.list_4.year        项目月度成本参与成员工作时间列表(周一至周五工作日)归属年(yyyy).
 * @apiSuccess {String}   workhours.list_4.month       项目月度成本参与成员工作时间列表(周一至周五工作日)归属月(MM).
 * @apiSuccess {String}   workhours.list_4.day         项目月度成本参与成员工作时间列表(周一至周五工作日)归属日(DD).
 * @apiSuccess {Number}   workhours.list_4.hours       项目月度成本参与成员工作时间列表(周一至周五工作日)工作小时(Hours).
 */
router.post('/:id/:year/:month', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

module.exports = router;
