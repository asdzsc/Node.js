const {
	Positions
} = require("../utils/db");

// 添加职位
const addPosition = (data) => {
	const position = new Positions(data)
	return position.save()
}

// 职位列表
const getPositionList = () => {
	return Positions.find({})
}

module.exports = {
	addPosition,
	getPositionList 
}
