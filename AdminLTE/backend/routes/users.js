var express = require("express");
var router = express.Router();

const { signUp, userList } = require("../controllers/user");

// 用户登录
router.post("/signup", signUp);
// 用户列表
router.get("/list", userList);

module.exports = router;