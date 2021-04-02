const http = require("http");

const fs = require("fs");

// const server = http.createServer((req, res) => {
//     let urlStr = req.url;
//     switch (urlStr) {
//         case "/":
//             res.end("ok");
//             break;
//         case "/home":
//             fs.readFile("./index.html", (err, content) => {
//                 res.end(content);
//             });
//             break;
//         case "/server.js":
//             fs.readFile("./server.js", (err, content) => {
//                 res.end(content);
//             });
//             break;
//         case "/unnamed.gif":
//             fs.readFile("./unnamed.gif", (err, content) => {
//                 res.end(content);
//             });
//             break;
//         default:
//             res.end("page 404");
//     }
// });

//获取文件后缀名
const mime = require("mime");

const server = http.createServer((req, res) => {
    let urlStr = req.url;
    //获取文件后缀名
    const type = mime.getType(urlStr.split(".")[1]);
    res.writeHead(200, {
        "content-type": type,
    });
    const file = fs.readFileSync(`.${urlStr}`);
    res.end(file);
});

server.listen(8080, () => {
    console.log("localhost:8080");
});