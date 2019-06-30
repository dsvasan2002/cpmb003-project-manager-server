var express = require('express');
var router = express.Router();
// const Parent = require("../model/parent");
const ParentController = require("../controllers/parent.controller");

router.post("/", ParentController.create);
router.post("/create", ParentController.create);
router.get("/", ParentController.getAllParentTasks);
router.get("/:id", ParentController.getParentTask);
router.get("/id/:id", ParentController.getParentTaskById);
router.put("/:id", ParentController.addUpdParentTask);
router.delete("/:id", ParentController.delParentTask);

module.exports = router;
