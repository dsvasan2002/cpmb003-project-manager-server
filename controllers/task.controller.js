const Task = require("./../model/Task");

module.exports = {
    create: function(req, res) {
        console.log(req.body);
        var task = new Task(req.body);
        task.save(function(err){
            if (!!err) {
                console.error(err);
                res.json({success: false, message: err.message});
            } else {
                res.status(201).json({success: true})
            }
        } )
    },
    getAll: function(req, res) {
        console.log(req.body);
        Task.find({}).exec(function(err, tasks){
            if(!!err) {
                console.error(err);
                res.json({success: false, message: err.message});
            } else {
                res.json({success: true, data: tasks});
            }
        })
    },

    getTask: function(req, res){
        let id = req.params.id;
        Task.findOne({_id:id}).exec(function(err, task){
            if(!!err) {
                console.error(err);
                res.json({success: false, message: err.message});
            } else {
                res.json({success: true, data: task});
            }
        })
    },

    addUpdTask: function(req, res) {
        let task = req.body;
        let id = req.params.id;

        Task.findByIdAndUpdate(id, {$set: task}, {}, function(err, task){
            if(!!err) {
                console.error(err);
                res.json({success: false, message: err.message});
            } else {
                res.json({success: true, data: task});
            }
        })
    },

    delTask: function(req, res){
        let id = req.params.id;

        Task.remove({_id: id}, function(err){
            if(!!err){
                console.error(err);
                res.json({success: false, message: err.message});
            } else {
                res.json({success: true});
            }
        })
    }
}