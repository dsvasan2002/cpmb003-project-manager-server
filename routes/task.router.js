var express = require('express');
var router = express.Router();

const Task = require("../model/task");
const TaskController = require("../controllers/task.controller");

router.post("/add", TaskController.create);
router.get("/", TaskController.getAll);
router.get("/:id", TaskController.getTask);
router.put("/:id", TaskController.addUpdTask);
router.delete("/:id", TaskController.delTask);

module.exports = router;
