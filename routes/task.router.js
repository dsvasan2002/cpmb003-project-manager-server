var express = require('express');
var router = express.Router();

const Task = require("../model/task");
const TaskController = require("../controllers/task.controller");

router.post("/tasks", TaskController.create);
router.get("/tasks", TaskController.getAll);
router.get("/tasks/:id", TaskController.getTask);
router.put("/tasks/:id", TaskController.addUpdTask);
router.delete("/tasks/:id", TaskController.delTask);

module.exports = router;
