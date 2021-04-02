"use strict";

var url = require("url");

var log4js = require("log4js");

log4js.configure({
  appenders: {
    cheese: {
      type: "file",
      filename: "cheese.log"
    }
  },
  categories: {
    "default": {
      appenders: ["cheese"],
      level: "error"
    }
  }
});
var logger = log4js.getLogger("cheese");
logger.level = "debug";
var urlString = "https://www.baidu.com:443/path/index.html?id=2#tag=3"; // console.log(url.parse(urlString));

logger.debug(url.parse(urlString));
var urlObject = {
  protocol: "https:",
  slashes: true,
  auth: null,
  host: "www.baidu.com:443",
  port: "443",
  hostname: "www.baidu.com",
  hash: "#tag=110",
  search: "?id=8&name=mouse",
  query: {
    id: "8",
    name: "mouse"
  },
  pathname: "/ad/index.html",
  path: "/ad/index.html?id=8&name=mouse",
  href: "https://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110"
};
logger.debug(url.format(urlObject)); // logger.debug(url.resolve("https://www.abc.com", "four"));

var a = url.resolve("/one/two/three", "four");
var b = url.resolve("http://example.com/", "/one");
var c = url.resolve("http://example.com/one", "/two");
console.log(a + "," + b + "," + c);
var urlParams = new URLSearchParams(url.parse(urlString).search);
console.log(urlParams.get("id")); // const myURL = new URL("https://example.org/?abc=123");
// console.log(myURL.searchParams.get("abc"));