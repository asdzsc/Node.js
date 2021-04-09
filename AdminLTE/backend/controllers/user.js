const usersModel = require("../model/user");
const { hash } = require("../utils/tool");

// 注册用户
const signUp = async(req, res, next) => {
    res.set("content-type", "application/json;charset=utf-8");

    const { username, password } = req.body;
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
const userList = async(req, res, next) => {
    res.set("content-type", "application/json;charset=utf-8");
    const list = await usersModel.findList();
    res.render("success", {
        data: JSON.stringify(list),
    });
};

module.exports = {
    signUp,
    userList,
};