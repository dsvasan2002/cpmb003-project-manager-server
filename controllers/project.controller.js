const Project = require('./../model/project.js');

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
    console.log(req);
    Project.find({}).exec(function(err, projects){
      if (!!err) {
        console.log(err);
        res.json({success: false, message: err.message});
      } else {
        res.status(201).json({success: true, data: projects});
      }
    })
  }
}
