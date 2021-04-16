// getting-started.js 连接我们本地的 lagou-admin 数据库。
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/lagou-admin", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
});

// 成功提醒和失败警告
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    // we're connected!
});

// Mongoose 的一切始于 Schema。每个 schema 都会映射到一个 MongoDB collection ，并定义这个collection里的文档的构成。
// 构建usersSchema
var usersSchema = new Schema({
    username: String,
    password: String,
});
//把这个 schema 编译成一个 Model Models 是从 Schema 编译来的构造函数。 
// 它们的实例就代表着可以从数据库保存和读取的 documents。 从数据库创建和读取 document 的所有操作都是通过 model 进行的。
var Users = mongoose.model("users", usersSchema);


// 构建positionsSchema
var positionsSchema = new Schema({
    componyName: String,
    positionName: String,
    city: String,
    createTime: String,
    salary: String,
});

var Positions = mongoose.model("positions", positionsSchema);


exports.Users = Users;
exports.Positions = Positions;