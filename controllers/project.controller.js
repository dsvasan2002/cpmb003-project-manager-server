const Project = require('./../model/project.js');
const mongoose = require('mongoose');

module.exports = {
  create: function (req, res) {
    var project = new Project(req.body);
    project.save(function (err) {
      if (!!err) {
        res.json({ success: false, message: err.message });
      } else {
        res.status(201).json({ success: true });
      }
    })
  },

  getAll: function (req, res) {
    Project.find({}).populate('Tasks', ['taskId', 'hasFinished']).exec(function (err, projects) {
      if (!!err) {
        // console.log(err);
        res.json({ success: false, message: err.message });
      } else {
        res.status(201).json({ success: true, data: projects });
      }
    })
  },
  getProject: function (req, res) {
    // console.log(req.body);
    let _projectId = req.params.id;
    Project.findOne({ projectId: _projectId }).exec(function (err, project) {
      if (!!err) {
        res.json({ success: false, message: err.message });
      } else {
        res.json({ success: true, data: project });
      }
    })
  },

  addUpdProject: function (req, res) {
    let project = req.body;
    console.log(req.body);
    Project.findOneAndUpdate(project.projectId, { $set: project }, {}, function (err, project) {
      if (!!err) {
        res.json({ success: false, message: err.message });
      } else {
        res.json({ success: true, data: project });
      }
    })
  },

  updateProject: function (req, res) {
    let newProject = new Project(req.body);

    Project.findOne({ projectId: newProject.projectId }, function (err, project) {
      if (!!err) {
        res.json({ success: false, message: err.message });
      } else {
        // res.json({ success: true, data: project });
        project.projectName = req.body.projectName;
        project.startDate = req.body.startDate;
        project.endDate = req.body.endDate;
        project.priority = req.body.priority;
        project.managerId = req.body.managerId;
        project.save((err, project) => {
          if (err) {
            res.json({ success: false, message: err.message });
          } else {
            res.json({ success: true, data: project });
          }
        });
      }
    })
  },

  delProject: function (req, res) {
    let projectId = req.params.id;

    Project.findOneAndRemove({ projectId: projectId }, function (err) {
      if (!!err) {
        res.json({ success: false, message: err.message });
      } else {
        res.json({ success: true });
      }
    })
  }
}
