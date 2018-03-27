var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var ObjectId  = Schema.ObjectId;

var MonthlyCostSchema = new Schema({
  project: {
    _id: {type: ObjectId},
    name: {type: String}
  },
  year: {type: String},
  month: {type: String},
  members: [{
    username: {type: String},
    name: {type: String},
    role: {type: String, default: 'Member'}
  }]
},{
  collection: 'project.monthlycost'
});

mongoose.model('MonthlyCost', MonthlyCostSchema);

