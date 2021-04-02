"use strict";

var http = require("http");

var server = http.createServer(function (request, response) {
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
  var data = "";
  request.on("data", function (chunk) {
    console.log(chunk);
    data += chunk;
  }); //json格式

  response.writeHead(200, {
    "content-type": "application/json;charset=utf-8"
  }); // response.write("{name:Tom,age:18}");
  // response.write(`{"url":"${url}"}`);
  // debugger;

  response.end();
});
server.listen(8080, function () {
  console.log("localhost:8080");
});