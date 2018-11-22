var express = require('express');
var router = express.Router();

const User = require("../model/task");
const UserController = require("../controllers/user.controller");

router.post("/users", UserController.create);
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getUser);
router.put("/users/:id", UserController.addUpdUser);
router.delete("/users/:id", UserController.delUser);

module.exports = router;
