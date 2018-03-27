var express = require('express');
var router = express.Router();
var Project = require('../proxy').Project;

/**
 * @api {get} /project/:username/list 取得当前用户所有项目
 * @apiName GetUserProjectList
 * @apiGroup Project
 *
 * @apiParam {String} username 用户名称.
 *
 * @apiSuccess {Object[]} projects                              项目列表.
 * @apiSuccess {String}   projects._id                          项目ID.
 * @apiSuccess {String}   projects.name                         项目名称.
 * @apiSuccess {object[]} projects.members                      项目成员列表.
 * @apiSuccess {String}   projects.members.username             项目成员用户名.
 * @apiSuccess {String}   projects.members.name                 项目成员名称.
 * @apiSuccess {String}   projects.members.role                 项目成员角色.
 * @apiSuccess {object[]} projects.monthlycosts                 项目月度成本列表.
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
 * @apiParam {Number} id Projects unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get('/:id', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

/**
 * @api {post} /project/ Post New Project information
 * @apiName PostNewProject
 * @apiGroup Project
 *
 * @apiParam {String} name Projects name.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/', function(req, res, next) {
  res.json({ message: 'hooray! welcome to our api!' });
});

module.exports = router;
