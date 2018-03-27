var EventProxy = require('eventproxy');
var models = require('../models');
var Project = models.Project;

exports.getProjectsByUserId = function (userid, callback) {

  Project.find({"members": {"$elemMatch": {"id": userid}}}, function (err, projects) {
    if (err) {
      return callback(err);
    }
    if (projects.length === 0) {
      return callback(null, []);
    }
    
    var proxy = new EventProxy();
    proxy.after('project_ready', projects.length, function () {
      projects = _.compact(projects); // 删除不合规的 project
      return callback(null, projects);
    });
    proxy.fail(callback);
    
    projects.forEach(function (project, i) {
      var ep = new EventProxy();
      ep.all('members', 'monthlycost', function (members, monthlycost) {
        // 保证顺序
        // 作者可能已被删除
        if (author) {
          project.author = author;
          project.reply = reply;
        } else {
          projects[i] = null;
        }
        proxy.emit('project_ready');
      });
      
      
    });
  });
};

exports.newAndSave = function (name, callback) {
  Project.findOne({name: name}, function (err, project) {
    if (err) {
      return callback(err, {});
    }

    if (project) {
      callback(null, project);
    } else {
      var project        = new Project();
      project.name       = name;

      project.save(callback);
    }
  });
};