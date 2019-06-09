const Project = require('./../model/project.js');
const mongoose = require('mongoose');

module.exports = {
  create: function(req, res) {
    console.log(req.body);
    var project = new Project(req.body);
    project.save(function(err) {
      if (!!err) {
        console.log(err);
        res.json({success: false, message: err.message});
      } else {
        res.status(201).json({success: true});
      }
    })
  },
  
  getAll: function (req, res) {
    console.log(req.body);
    Project.find({}).exec(function(err, projects){
      if (!!err) {
        console.log(err);
        res.json({success: false, message: err.message});
      } else {
        res.status(201).json({success: true, data: projects});
      }
    })
  },
  getProject: function(req, res){
    console.log(req.body);
    let id = req.params.id;
    Project.findOne({_id:id}).exec(function(err, project){
        if(!!err) {
            console.error(err);
            res.json({success: false, message: err.message});
        } else {
            res.json({success: true, data: project});
        }
    })
},

addUpdProject: function(req, res) {
  console.log(req.body);

    let project = req.body;
    let id = req.params.id;

    Project.findByIdAndUpdate(id, {$set: project}, {}, function(err, project){
        if(!!err) {
            console.error(err);
            res.json({success: false, message: err.message});
        } else {
            res.json({success: true, data: project});
        }
    })
},

delProject: function(req, res){
  console.log(req.body);

    let id = req.params.id;

    Project.remove({_id: id}, function(err){
        if(!!err){
            console.error(err);
            res.json({success: false, message: err.message});
        } else {
            res.json({success: true});
        }
    })
}
}
