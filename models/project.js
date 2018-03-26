var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var ObjectId  = Schema.ObjectId;

var ProjectSchema = new Schema({
  name: {type: String },
  members: [{
    id: {type: ObjectId},
    name: {type: String},
    role: {type: String, default: 'Member'}
  }]
});

mongoose.model('Project', ProjectSchema);
