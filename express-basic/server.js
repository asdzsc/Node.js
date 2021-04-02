const express = require("express");
const app = express();
const path = require("path");
// req.body的第三方中间件
var bodyParser = require("body-parser");
const router = require("./router/index");

// parse application/x-www-form-urlencoded 处理表单格式
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json 处理json格式
app.use(bodyParser.json());

// 静态资源服务中间件(内置中间件)
app.use("/index", express.static("public"));
// app.use("/fool", express.static("fool"));

// view engine setup
app.engine("art", require("express-art-template"));
//这里与官网不一样
app.set("view options", {
    debug: process.env.NODE_ENV !== "production",
    // 是否开启对模板输出语句自动编码功能。为 false 则关闭编码输出功能
    // escape 可以防范 XSS 攻击
    escape: false,
});
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "art");

app.use("/", router);

app.listen(8080, () => {
    console.log("localhost:8080");
});