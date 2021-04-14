var template = require("art-template");
const path = require("path");
const fs = require("fs");

var jwt = require("jsonwebtoken");

const listModel = require("../model/index");

// 应用中间件
const list = (req, res, next) => {
    // let data = "";
    // data += "<ul>";
    // for (var i = 0; i < 10; i++) {
    //     data += `<li>line ${i} </li>`;
    // }
    // data += "</ul>";
    // let dataObj = {
    //     code: 200,
    //     data: [],
    // };
    // for (var i = 0; i < 10; i++) {
    //     dataObj.data.push("line" + i);
    // }
    // res.send(dataObj);

    // res.set("Content-Type", "application/json");
    // res.set({
    //     "Content-Type": "text/plain",
    //     "Content-Length": "123",
    //     ETag: "12345",
    // });
    //返回数据给前端
    // res.render("list", {
    //     data: JSON.stringify(dataArray),
    // });
    //直接返回html给前端
    // res.render("list-html", {
    //     data: dataArray,
    // });
    // 返回静态文件给前端
    var html = template(path.join(__dirname, "../view/list-html.art"), {
        data: listModel.dataArray,
    });
    fs.writeFileSync(path.join(__dirname, "../public/list.html"), html);
    // res.send(html);
    res.send("page has been complied.");
};

const token = (req, res, next) => {
    // 对称加密
    // const tk = jwt.sign({ username: "admin" }, "shhhhh");
    // const decoded = jwt.verify(tk, "shhhhh");
    // res.send(decode);

    // 非对称加密
    const privateKey = fs.readFileSync(
        path.resolve(__dirname, "../keys/rsa_private_key.pem")
    );
    // sign 加密
    const tk = jwt.sign({ username: "admin" }, privateKey, {
        algorithm: "RS256",
    });
    const publicKey = fs.readFileSync(
        path.resolve(__dirname, "../keys/rsa_public_key.pem")
    );
    // 解密
    const decoded = jwt.verify(tk, publicKey);

    res.send(decoded);
};
exports.list = list;
exports.token = token;