var express = require('express');
var router = express.Router();

const TaskController = require("../controllers/task.controller");

router.post("/", TaskController.create);
router.post("/create", TaskController.create);
router.post("/update", TaskController.upateTask);
router.get("/", TaskController.getAll);
router.get("/:id", TaskController.getTask);
router.put("/:id", TaskController.addUpdTask);

router.delete("/:id", TaskController.delTask);

module.exports = router;
