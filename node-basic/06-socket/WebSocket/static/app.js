const http = require("http");
const path = require("path");

const readStaticFile = require("./readStaticFiles");

const server = http.createServer(async(req, res) => {
    let urlStr = req.url;
    let filePathName = path.join(__dirname, "./public", urlStr);
    let { data, mimeType } = await readStaticFile(filePathName, res); //返回文件的读取流
    // console.log(`${mimeType};charset=utf-8`);
    res.writeHead(200, {
        "content-type": `${mimeType};charset=utf-8`,
    });

    res.write(data);
    res.end();
});
server.listen(8080, () => {
    console.log("localhost:8080");
});