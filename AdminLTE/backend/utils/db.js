// getting-started.js 连接我们本地的 lagou-admin 数据库。
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/lagou-admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// 成功提醒和失败警告
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    // we're connected!
});

// Mongoose 的一切始于 Schema。每个 schema 都会映射到一个 MongoDB collection ，并定义这个collection里的文档的构成。
// 构建usersSchema
var usersSchema = mongoose.Schema({
    username: String,
    password: String,
});
//
var Users = mongoose.model("users", usersSchema);

exports.Users = Users;