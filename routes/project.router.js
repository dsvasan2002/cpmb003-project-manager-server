var express = require('express');
var router = express.Router();

const Project = require("../model/project");
const ProjectController = require("../controllers/project.controller");

router.post("/projects", ProjectController.create);
router.get("/projects", ProjectController.getAll);
router.get("/projects/:id", ProjectController.getProject);
router.put("/projects/:id", ProjectController.addUpdProject);
router.delete("/projects/:id", ProjectController.delProject);


module.exports = router;
