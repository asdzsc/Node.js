const { Users } = require("../utils/db");

// 注册用户
const signup = ({ username, password }) => {
    const users = new Users({
        username,
        password,
    });
    // 往数据库存储数据是异步操作 返回promise
    return users.save();
};

// 查找用户
const findUser = (username) => {
    // 查询数据库是异步操作 返回promise
    return Users.findOne({ username });
};

// 查询用户列表
const findList = () => {
    return Users.find().sort({ _id: -1 });
};

// 删除用户
const delUser = (id)=>{
	// return Users.findByIdAndRemove(id)
	return Users.deleteOne({_id:id})
}

module.exports = {
    signup,
    findUser,
    findList,
	delUser
};