const http = require("http");
const { createProxyMiddleware } = require("http-proxy-middleware");

// 正向代理
const server = http.createServer((req, res) => {
    let url = req.url;
    if (/\/api/.test(url)) {
        const apiProxy = createProxyMiddleware("/api", {
            target: "https://www.027smf.com",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
        });
        apiProxy(req, res);
    } else if (/\json/.test(url)) {
        res.writeHead(200, {
            "content-type": "application/json;charset:utf-8",
            "Access-Control-Allow-Origin": "*",
        });
        const apiProxy1 = createProxyMiddleware("/json", {
            target: "https://m.lagou.com",
            changeOrigin: true,
            pathRewrite: {
                "^/json": "",
            },
        });
        apiProxy1(req, res);
    } else {
        console.log("error");
    }
});

server.listen(8080, () => {
    console.log("localhost:8080");
});