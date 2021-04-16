const positionsModel = require("../model/position");
const moment = require('moment')


// 添加职位
const add = async (req, res, next) => {
	res.set("content-type", "application/json;charset=utf-8");
	let result = await positionsModel.addPosition({
		...req.body,
		createTime: moment().format('YYYY年MM月DD日 HH:mm')
	})
	if (result) {
		res.render("success", {
			data: JSON.stringify({
				message: "职位添加成功"
			})
		})
	} else {
		res.render("fail", {
			data: JSON.stringify({
				message: "职位添加失败"
			})
		})
	}
	res.send(result)
}


// 获取职位列表

const list =  async (req,res,next)=>{
	const result = await positionsModel.getPositionList()
	if(result){
		res.json(result)
	}else{
		res.render("fail", {
			data: JSON.stringify({
				message: "获取职位列表失败！"
			})
		})
	}
}
module.exports = {
	add,
	list
}
