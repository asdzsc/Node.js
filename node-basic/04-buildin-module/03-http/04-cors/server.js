const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    let urlStr = req.url;
    let urlObj = url.parse(urlStr, true);
    switch (urlObj.pathname) {
        case "/api/data":
            res.writeHead(200, {
                "content-type": "application/json;charset:utf-8",
                "Access-Control-Allow-Origin": "*",
            });
            res.write(
                `{
                    "landlord": "郏财主",
                    "age": 18,
                    "staffs": [
                        {
                            "farmer": "①号民工",
                            "age": 17
                        },
                        {
                            "farmer": "贰号民工",
                            "age": 17
                        }
                    ]
                }`
            );
            break;
        default:
            res.write("not found");
    }
    res.end();
});

server.listen(8080, () => {
    console.log("localhost:8080");
});