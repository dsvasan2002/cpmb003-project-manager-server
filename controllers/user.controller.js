const User = require("../model/user");

module.exports = {
    create: function(req, res) {
        console.log(req.body);
        var user = new User(req.body);
        user.save(function(err){
            if (!!err) {
                console.log(err);
                res.json({success: true, message: err.message});
            } else {
                res.status(201).json({success: true});
            }
        })
    },
    getAll: function(req, res) {
        console.log(req.body);
        User.find({}).exec(function(err, users){
            if(!!err) {
                console.error(err);
                res.json({success: false, message: err.message});
            } else {
                res.json({success: true, data: users});
            }
        })
    },
    getUser: function(req, res){
        let id = req.params.id;
        Task.findOne({_id:id}).exec(function(err, user){
            if(!!err) {
                console.error(err);
                res.json({success: false, message: err.message});
            } else {
                res.json({success: true, data: user});
            }
        })
    },
    addUpdUser: function(req, res) {
        let user = req.body;
        let id = req.params.id;

        User.findByIdAndUpdate(id, {$set: user}, {}, function(err, user){
            if(!!err) {
                console.error(err);
                res.json({success: false, message: err.message});
            } else {
                res.json({success: true, data: user});
            }
        })
    },
    delUser: function(req, res){
        let id = req.params.id;

        User.remove({_id: id}, function(err){
            if(!!err){
                console.error(err);
                res.json({success: false, message: err.message});
            } else {
                res.json({success: true});
            }
        })
    }
}