const mongoose = require('mongoose');
const autoIncrement= require('mongoose-sequence')(mongoose);


var ParentTaskSchema = new mongoose.Schema({
    parentID: {type: Number },
    parentTask: {type: String, required: true},
    projectID: {type: Number, default: null}  
})

ParentTaskSchema.plugin(autoIncrement, {inc_field: 'parentId'});

var ParentTask = mongoose.model('ParentTask', ParentTaskSchema);
module.exports = ParentTask;
