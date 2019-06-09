var mongoose = require('mongoose');
const autoIncrement= require('mongoose-sequence')(mongoose);

var UserSchema = mongoose.Schema({
    userId: {type: Number, required: false},
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    employeeId: {type: Number, require: true},
    projectId: {type: mongoose.Schema.ObjectId, ref: 'Project', required: false},
    taskId: [ {type: mongoose.Schema.ObjectId, ref: 'Task', required: false}]

})

UserSchema.plugin (autoIncrement, {inc_field : 'userID'})

var User = mongoose.model('User', UserSchema);
module.exports = User;
