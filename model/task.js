var mongoose = require('mongoose');
const autoIncrement= require('mongoose-sequence')(mongoose);

var TaskSchema = new mongoose.Schema({
    taskId: {type: Number},
    taskName: {type: String, required: true, unique: true, dropDups: true},
    parentId: {type: mongoose.Schema.ObjectId, ref: 'Task', required: false},
    projectId: {type: mongoose.Schema.ObjectId, ref: 'Project', required: true},
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    priority: { type: Number, required: true, min: 0, max: 30 },
    status: { type: Boolean, default: false },
    User: {type: mongoose.Schema.Types.ObjectId, ref: 'User' }    
})

TaskSchema.plugin(autoIncrement, {inc_field: 'taskId'});

var Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
