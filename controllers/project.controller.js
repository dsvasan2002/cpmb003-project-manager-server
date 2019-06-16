const Project = require('./../model/project.js');
const mongoose = require('mongoose');

module.exports = {
  create: function(req, res) {
    var project = new Project(req.body);
    project.save(function(err) {
      if (!!err) {
        res.json({success: false, message: err.message});
      } else {
        res.status(201).json({success: true});
      }
    })
  },
  
  getAll: function (req, res) {
    Project.find({}).populate('Tasks', ['taskId', 'hasFinished']).exec(function(err, projects){
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
    let _projectId = req.params.id;
    Project.findOne({projectId:_projectId}).exec(function(err, project){
        if(!!err) {
            res.json({success: false, message: err.message});
        } else {
            res.json({success: true, data: project});
        }
    })
  },

  addUpdProject: function(req, res) {
    let project = req.body;
    let projectId = req.params.id;

    Project.findOneAndUpdate(projectId, {$set: project}, {}, function(err, project) {
    if(!!err) {
        res.json({success: false, message: err.message});
    } else {
        res.json({success: true, data: project});
    }
  })
},

  delProject: function(req, res){
    let projectId = req.params.id;

    Project.findOneAndRemove({projectId: projectId}, function(err) {
      if(!!err){
          res.json({success: false, message: err.message});
      } else {
          res.json({success: true});
      }
    })
  }
}
