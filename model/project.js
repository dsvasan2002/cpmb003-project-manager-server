var mongoose = require('mongoose');
const Task = require('./task');
const autoIncrement = require('mongoose-sequence')(mongoose)

var ops = {
    toObjects: { virtuals: false },
    toJSON: { virtuals: true} 
  }
  
  
var ProjectSchema = new mongoose.Schema({
    projectId: {type: Number},
    projectName: {type: String, required: true, unique: true, dropDups: true},
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    priority: { type: Number, required: true, min: 0, max: 30 },
    managerId: {type: Number, default: null},       

})

ProjectSchema.plugin(autoIncrement, { inc_field: 'projectId' })

var Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;