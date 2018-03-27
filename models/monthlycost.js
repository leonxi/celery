var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var ObjectId  = Schema.ObjectId;

var MonthlyCostSchema = new Schema({
  name: {type: String },
  members: [{
    id: {type: ObjectId},
    name: {type: String},
    role: {type: String, default: 'Member'}
  }]
},{
  collection: 'project.monthlycost'
});

mongoose.model('MonthlyCost', MonthlyCostSchema);

