var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var ObjectId  = Schema.ObjectId;

var MemberSchema = new Schema({
  project_id: {type: ObjectId},
  user_id: {type: ObjectId},
  role: {type: String, default: 'Member'}
});

mongoose.model('Member', MemberSchema);
