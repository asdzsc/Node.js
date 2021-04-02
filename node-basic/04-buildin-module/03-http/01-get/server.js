const http = require("http");
const https = require("https");
const logger = require("../../utils/log");
const querystring = require("querystring");

const server = http.createServer((request, response) => {
    // console.log(request);
    // console.log(response);
    //文本格式
    // response.writeHead(200, {
    //     "content-type": "text/plain",
    // });
    //html格式
    // response.writeHead(200, {
    //     "content-type": "text/html",
    // });
    // const url = request.url;
    // console.log(url);
    /*
          let data = "";
          request.on("data", (chunk) => {
              // console.log(chunk);
              data += chunk;
              // console.log(data);
              // console.log(JSON.stringify(data));
              // console.log(querystring.parse(data));
              // console.log(JSON.stringify(querystring.parse(data)));
              // console.log(typeof data);
              // console.log(typeof JSON.stringify(data));
              // console.log(typeof querystring.parse(data));
              // console.log(typeof JSON.stringify(querystring.parse(data)));
          });
          request.on("end", () => {
              response.writeHead(200, {
                  "content-type": "application/json;charset=utf-8",
              });
              // console.log();
              // response.write(JSON.stringify(querystring.parse(data)));
              response.end();
          });
          */
    //json格式
    /*
        response.writeHead(200, {
            "content-type": "application/json;charset=utf-8",
        });
        // response.write("{name:Tom,age:18}");
        response.write(`{"url":"${url}"}`);
        // debugger;
        response.end();
        */
    https.get("https://www.027smf.com/web-api/sysbanner/bannerList", (res) => {
        let data = "";
        res.on("data", (chunk) => {
            data += chunk;
            logger.debug(data);
        });
        res.on("end", () => {
            response.writeHead(200, {
                "content-type": "application/json;charset=utf-8",
            });
            response.write(data);
            response.end();
        });
    });
});

server.listen(8080, () => {
    console.log("localhost:8080");
});