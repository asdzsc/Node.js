// RMVC
const express = require("express");

// 路由中间件
const router = express.Router();

const { list, token } = require("../controllers/index");
router.get("/api/list", list);
router.get("/api/token", token);

// 获取数据
// router.get("/index", (req, res, next) => {
//     // 路由参数用body来取值
//     const id = req.query;
//     console.log(id);
//     res.send("index pages");
// });
// // 添加数据
// router.post("/index", (req, res, next) => {
//     // 表单参数用body来取值
//     const data = req.body;
//     console.log(data);
//     res.send("post pages");
// });

// // 修改数据-覆盖式修改
// router.put("/index", (req, res, next) => {
//     // 表单参数用body来取值
//     const data = req.body;
//     console.log(data);
//     res.send("put pages");
// });

// // 修改数据-增量式修改(局部修改)
// router.patch("/index", (req, res, next) => {
//     // 表单参数用body来取值
//     const data = req.body;
//     console.log(data);
//     res.send("patch pages");
// });

// // 删除数据
// router.delete("/index", (req, res, next) => {
//     // 表单参数用body来取值
//     const data = req.body;
//     console.log(data);
//     res.send("delete pages");
// });

// 匹配所有HTTP方法
// router.all("/index", (req, res, next) => {
//     res.send("hello");
// });

module.exports = router;