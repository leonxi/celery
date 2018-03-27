var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var TimeSheetSchema = new Schema({
  year: {type: String },
  month: {type: String },
  employees: [{
    employeename: {type: String},
    days: [{
      day: {type: String},
      workhours_1: {type: Number},
      workhours_2: {type: Number},
      workhours_3: {type: Number},
      workhours_4: {type: Number},
      takeoffhours: {type: Number},
      leavehours: {type: Number},
    }]
  }]
},{
  collection: 'timesheet'
});

mongoose.model('TimeSheet', TimeSheetSchema);
