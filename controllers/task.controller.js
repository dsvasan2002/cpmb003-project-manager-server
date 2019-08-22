const Task = require("../model/task");
const ParentTask = require("../model/parent");
const User = require("../model/user");
const Project = require("../model/project");

module.exports = {
  create: function(req, res) {
    var task = new Task(req.body);
    task.save(function(err) {
      if (!!err) {
        res.json({ success: false, message: err.message });
      } else {
        res.status(201).json({ success: true });
      }
    });
  },
  getAll: function(req, res) {
    var query = Task.find();
    query
      .populate("project")
      .populate("user")
      .populate("parentTask");

    query.exec(function(err, tasks) {
      if (!!err) {
        res.json({ success: false, message: err.message });
      } else {
        res.json({ success: true, data: tasks });
      }
    });
  },

  getTask: function(req, res) {
    let taskId = req.params.id;
    Task.findOne({ taskId: taskId })
      .populate("project")
      .populate("user")
      .populate("parentTask")
      .exec(function(err, task) {
        if (!!err) {
          res.json({ success: false, message: err.message });
        } else {
          res.json({ success: true, data: task });
        }
      });
  },

  addUpdTask: function(req, res) {
    let task = req.body;
    let taskId = req.params.id;

    Task.findOneAndUpdate(taskId, { $set: task }, {}, function(err, task) {
      if (!!err) {
        res.json({ success: false, message: err.message });
      } else {
        res.json({ success: true, data: task });
      }
    });
  },

  updateTask: function(req, res) {
    let newTask = new Task(req.body);
    Task.findOne({ taskId: newTask.taskId }, (err, task) => {
      if (!task) {
        res.json({ success: false, message: err.message });
      } else {
        task.taskName = req.body.taskName;
        task.priority = req.body.priority;
        task.parentTask = req.body.parentTask;
        task.startDate = req.body.startDate;
        task.endDate = req.body.endDate;
        task.hasFinished = req.body.hasFinished;

        task.save((err, task) => {
          if (err) {
            res.json({ success: false, message: err.message });
          } else {
            res.json({ success: true, data: task });
          }
        });
      }
    });
  },

  delTask: function(req, res) {
    let taskId = req.params.id;

    Task.findOneAndRemove({ taskId: taskId }, function(err) {
      if (!!err) {
        res.json({ success: false, message: err.message });
      } else {
        res.json({ success: true });
      }
    });
  }
};
