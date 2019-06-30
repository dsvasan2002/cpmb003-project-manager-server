const ParentTask = require("../model/parent");

module.exports = {
    create: function(req, res) {
        var parentTask = new ParentTask(req.body);
        parentTask.save(function(err){
            if (!!err) {
                res.json({success: true, message: err.message});
            } else {
                res.status(201).json({success: true});
            }
        })
    },
    getAllParentTasks: function(req, res) {
        ParentTask.find({}).exec(function(err, parentTasks){
            if(!!err) {
                res.json({success: false, message: err.message});
            } else {
                res.json({success: true, data: parentTasks});
            }
        })
    },
    getParentTask: function(req, res){
        let parentTaskId = req.params.id;
        ParentTask.findOne({parentTaskId:parentTaskId}).exec(function(err, parentTask){
            if(!!err) {
                res.json({success: false, message: err.message});
            } else {
                res.json({success: true, data: parentTask});
            }
        })
    },   
    getParentTaskById: function(req, res){
        let anId = req.params.id;
        ParentTask.findOne({_id:anId}).exec(function(err, parentTask){
            if(!!err) {
                console.error(err);
                res.json({success: false, message: err.message});
            } else {
                res.json({success: true, data: parentTask});
            }
        })
    },
    addUpdParentTask: function(req, res) {
        let parentTask = req.body;
        let parentTaskId = req.params.id;

        ParentTask.findOneAndUpdate(parentTaskId, {$set: parentTask}, {}, function(err, parentTask){
            if(!!err) {
                res.json({success: false, message: err.message});
            } else {
                res.json({success: true, data: parentTask});
            }
        })
    },
    delParentTask: function(req, res){
        let parentTaskId = req.params.id;

        ParentTask.findOneAndRemove({parentTaskId: parentTaskId}, function(err){
            if(!!err){
                res.json({success: false, message: err.message});
            } else {
                res.json({success: true});
            }
        })
    }
}