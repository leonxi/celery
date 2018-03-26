var models = require('../models');
var Project = models.Project;

exports.newAndSave = function (name, callback) {
  var project = new Project();
  project.name = name;

  project.save(callback);
};
