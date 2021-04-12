const { Users } = require("../utils/db");

const findUser = (username) => {
    // 查询数据库是异步操作 返回promise
    return Users.findOne({ username });
};

const findList = () => {
    return Users.find().sort({ _id: -1 });
};
const signup = ({ username, password }) => {
    const users = new Users({
        username,
        password,
    });
    // 往数据库存储数据是异步操作 返回promise
    return users.save();
};
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