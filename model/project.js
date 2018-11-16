var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
    projectName: {type: String, required: true, unique: true, dropDups: true},
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    priority: { type: Number, required: true, min: 0, max: 30 },

})

var Project = mongoose.model('Projet', ProjectSchema);
module.exports = Project;