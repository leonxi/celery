var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var schema = process.env.SCHEMA || 'default';
var project = process.env.PROJECTNAME || 'celery';
var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/' + schema + '/apis/' + project, router);

app.listen(port);
console.log('Celery APIs on port ' + port);
