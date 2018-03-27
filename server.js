var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('./models');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var schema = process.env.SCHEMA || 'default';
var projectname = process.env.PROJECTNAME || 'celery';
var port = process.env.PORT || 8080;
var root = '/' + schema + '/apis/' + projectname;

var project = require('./routes/project');
var timesheet = require('./routes/timesheet');

app.use(root + '/project', project);
app.use(root + '/timesheet', timesheet);
app.use('/apidoc', express.static('apidoc'));

app.listen(port);
console.log('Celery APIs on port ' + port);
