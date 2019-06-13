var express = require('express');
var router = express.Router();

const User = require("../model/task");
const UserController = require("../controllers/user.controller");

router.post("/", UserController.create);
router.post("/create", UserController.create);
router.get("/", UserController.getAll);
router.get("/:id", UserController.getUser);
router.put("/:id", UserController.addUpdUser);
router.delete("/:id", UserController.delUser);

module.exports = router;
