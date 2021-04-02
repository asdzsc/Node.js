// console.log(require); //浏览器中是没有require模块的

// import name from "./name";
// 引用模块
const { name, age } = require("./name");

// 调用模块
name.sayName();
console.log(age.age);