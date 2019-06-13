const mongoose = require('mongoose');
// const ParentTask = require('./parent');
const autoIncrement= require('mongoose-sequence')(mongoose);


var ParentTaskSchema = new mongoose.Schema({
    parentTaskId: {type: Number },
    parentTaskName: {type: String, required: true},
    projectId: {type: Number, default: null}  
})

ParentTaskSchema.plugin(autoIncrement, {inc_field: 'parentTaskId'});

var ParentTask = mongoose.model('ParentTask', ParentTaskSchema);
module.exports = ParentTask;
