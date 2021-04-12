var express = require("express");
var router = express.Router();

const {
	signUp,
	userList,
	delUser,
	signIn,
	signOut,
	isAuth
} = require("../controllers/user");

const {
	auth
} = require("../middlewares/auth.js")

// 用户列表
router.get("/", auth, userList);
// 删除用户
router.delete("/", auth, delUser);


// 用户注册
router.post("/", auth, signUp);
// 用户登录
router.post("/signin", signIn);
// 用户退出登录
router.get("/signout", auth, signOut);
// 判断是否登录 
router.get("/isAuth", isAuth)


module.exports = router;
