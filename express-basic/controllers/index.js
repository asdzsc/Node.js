var template = require("art-template");
const path = require("path");
const fs = require("fs");

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

exports.list = list;