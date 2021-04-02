const listModel = require("../model/index");
const path = require("path");
const fs = require("fs");
var template = require("art-template");
const list = (req, res) => {
    //res.send(目标数据)
    // res.send(listModel);
    // res.set("Content-Type", "application/json");
    // res.render("list", {
    //     data: JSON.stringify(listModel.data),
    // });
    // render('目标文件'，数据)
    // res.render("list", {
    //     data: JSON.stringify(listModel.data),
    // });
    // res.render("list-html", {
    //     data: listModel.data,
    // });

    const html = template(path.join(__dirname, "../view/list-html.art"), {
        data: listModel.data,
    });
    fs.writeFileSync(path.join(__dirname, "../public/list.html"), html);
    // res.send(html);
    res.send("page has been complied.");
};

exports.list = list;