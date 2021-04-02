"use strict";

var querystring = require("querystring");

var query = "id=26&name=tongyi&from=北京";
var queryEscape = "id%3D26%26name%3Dtongyi%26from%3D%E5%8C%97%E4%BA%AC";
var queryObj = {
  id: "2",
  name: "Tom",
  from: "北京"
};
var query2 = "id:2/name:tongyi/from:北京"; // console.log(querystring.parse(query));
// console.log(querystring.parse(query2, "/", ":"));
// console.log(querystring.escape(query));
// console.log(querystring.unescape(queryEscape));
// console.log(querystring.stringify(queryObj, ":", "/"));

var newQuery = querystring.stringify(queryObj, null, null, {
  encodeURIComponent: function encodeURIComponent(string) {
    return querystring.unescape(string);
  }
});
console.log(newQuery);