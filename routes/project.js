var express = require('express');
var router = express.Router();
var Project = require('../proxy').Project;

/**
 * @api {get} /project/list 取得所有项目
 * @apiName GetProjectList
 * @apiGroup Project
 *
 * @apiParam {Number} id Projects unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get('/list', function(req, res, next) {
  Project.find(function(err, projects, count) {
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
