const path = require("path");
const mime = require("mime");
const fs = require("fs");

function myReadFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                // res.end("err");
                // reject(err);
                // return "你访问的是一个文件夹，且文件夹里面没有index.html";
                resolve("你访问的是一个文件夹，且文件夹里面没有index.html");
            } else {
                resolve(data);
            }
        });
    });
}

async function readStaticFile(filePathName, res) {
    let ext = path.parse(filePathName).ext;
    const mimeType = mime.getType(ext) || "text/html";

    let data;
    //判断文件是否存在
    if (fs.existsSync(filePathName)) {
        // 判断是文件还是文件夹
        if (ext) {
            // data = myReadFile(filePathName);
            // myReadFile(filePathName)
            //     .then((res) => {
            //         data = res;
            //     })
            //     .catch((err) => {
            //         data = err;
            //     });
            data = await myReadFile(filePathName);
        } else {
            // data = myReadFile(path.join(filePathName, "/index.html"), res);
            // myReadFile(path.join(filePathName, "/index.html"))
            //     .then((res) => {
            //         data = res;
            //     })
            //     .catch((err) => {
            //         data = err;
            //     });
            data = await myReadFile(path.join(filePathName, "/index.html"));
        }
    } else {
        // console.log("file not found");
        data = "file not found";
    }
    return {
        mimeType,
        data,
    };
}

module.exports = readStaticFile;