var express = require('express');
var router = express.Router();

/**
 * @api {get} /project/:id Request Project information
 * @apiName GetProject
 * @apiGroup Project
 *
 * @apiParam {Number} id Projects unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get('/:id', function(req, res, next) {
  req.assert('id', '没有指定项目ID');
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
