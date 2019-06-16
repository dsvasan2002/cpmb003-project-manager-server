var express = require('express');
var router = express.Router();

const ProjectController = require("../controllers/project.controller");

router.post("/", ProjectController.create);
router.post("/create", ProjectController.create);
router.get("/", ProjectController.getAll);
router.get("/:id", ProjectController.getProject);
router.put("/:id", ProjectController.addUpdProject);
router.delete("/:id", ProjectController.delProject);


module.exports = router;
