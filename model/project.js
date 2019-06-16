var mongoose = require('mongoose');
const Task = require('./task');
const autoIncrement = require('mongoose-sequence')(mongoose)

var ops = {
    toObjects: { virtuals: false },
    toJSON: { virtuals: true} 
  }
  
  
let ProjectSchema = new mongoose.Schema({
    projectId: {type: Number},
    projectName: {type: String, required: true, unique: true, dropDups: true},
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    priority: { type: Number, required: true, min: 0, max: 30 },
    managerId: {type: Number, default: null},       
}, ops, {collection: 'projects'});



ProjectSchema
.virtual('Tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'project'
});

ProjectSchema
.virtual('TotalTasks').get( function ()  {
  return this.get('Tasks') ? this.get('Tasks').length : 0;
});

ProjectSchema
.virtual('CompletedTasks').get( function() {
  if (this.get('Tasks') && this.get('Tasks').length > 0) {
    var tasks = this.get('Tasks').filter( (task) => {
      return task.hasFinished == 1;
    });
    return tasks.length;
  } else {
    return 0;
  }
});


ProjectSchema.plugin(autoIncrement, { inc_field: 'projectId' })
var Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;