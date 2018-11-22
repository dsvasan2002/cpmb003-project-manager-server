var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    employeeId: {type: String, require: true},
    projectId: {type: mongoose.Schema.ObjectId, ref: 'Project', required: true},
    taskId: [ {type: mongoose.Schema.ObjectId, ref: 'Task', required: false}]

})

var User = mongoose.model('User', UserSchema);
module.exports = User;
