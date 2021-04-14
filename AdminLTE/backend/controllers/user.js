const usersModel = require("../model/user");
const {
	hash,
	compare,
	sign,
	verify
} = require("../utils/tool");

// 搭建随机cookie传给前端
// const randomstring = require("randomstring");


// 注册用户
const signUp = async (req, res, next) => {
	res.set("content-type", "application/json;charset=utf-8");
	const {
		username,
		password
	} = req.body;
	// 密码加密
	const bcryptPassword = await hash(password);
	// 判断用户是否存在
	const findResult = await usersModel.findUser(username);
	// console.log(findResult);
	if (findResult) {
		res.render("fail", {
			data: JSON.stringify({
				message: "用户已存在！",
			}), 
		});
	} else {
		// 异步操作
		const result = await usersModel.signup({
			username,
			password: bcryptPassword,
		});
		res.render("success", {
			data: JSON.stringify({
				message: "注册成功！",
			}),
		});
	}
};

// 用户列表
const userList = async (req, res, next) => {
	res.set("content-type", "application/json;charset=utf-8");
	const list = await usersModel.findList();
	res.render("success", {
		data: JSON.stringify(list),
	});
};

// 删除用户
const delUser = async (req, res, next) => {
	res.set("content-type", "application/json;charset=utf-8");
	const {
		id
	} = req.body
	const result = await usersModel.delUser(id)
	if (result) {
		res.render("success", {
			data: JSON.stringify({
				message: "删除用户成功！"
			}),
		});
	} else {
		res.render("fail", {
			data: JSON.stringify({
				message: "删除用户失败！"
			}),
		});
	}


}

// 用户登录
const signIn = async (req, res, next) => {

	const {
		username,
		password
	} = req.body
	const result = await usersModel.findUser(username)
	// 验证用户是否是合法用户
	if (result) {
		let {
			password: hash
		} = result
		// 验证密码是否正确
		let compareResult = await compare(password, hash)
		if (compareResult) {
			// 搭建 cookie
			// const sessionId = randomstring.generate();
			// res.set('Set-Cookie', `sessionId=${sessionId}; Path=/; HttpOnly`)
			
			// 根据username生成cookie
			// req.session.username = username

			// 根据username生成token
			const token = sign(username)
			// console.log(token)
			
			// 把token设置到请求头中
			res.set("X-Access-Token", token)
			
			res.render("success", {
				data: JSON.stringify({
					username
				}),
			});
		} else {
			res.render("fail", {
				data: JSON.stringify({
					message: "用户名或密码错误"
				}),
			});
		}

	} else {
		res.render("fail", {
			data: JSON.stringify({
				message: "用户名或密码错误"
			}),
		});
	}
}

// 退出登录
const signOut = async (req, res, next) => {
	req.session = null
	res.render("success", {
		data: JSON.stringify({
			message: "退出登录成功！"
		}),
	});
}

// 判断是否登录
const isAuth = async (req, res, next) => {
	// if (req.session.username) {
	// 	res.render("success", {
	// 		data: JSON.stringify({
	// 			username: req.session.username
	// 		}),
	// 	});
	// } else {
	// 	res.render("fail", {
	// 		data: JSON.stringify({
	// 			message: "请登录！"
	// 		}),
	// 	});
	// }
	
	// 获取到token
	const token = req.get("X-Access-Token")
	try {
		// token 解密
		let decoded = verify(token)
		console.log(decoded)
		res.render("success", {
			data: JSON.stringify({
				username: decoded.username
			}),
		});
	} catch (e) {
		res.render("fail", {
			data: JSON.stringify({
				message: "请登录！"
			}),
		});
	}
}

module.exports = {
	signUp,
	userList,
	delUser,
	signIn,
	signOut,
	isAuth
};
