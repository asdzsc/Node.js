const express = require("express");

const app = express();

// next函数主要负责将控制权交给下一个中间件，
// 如果当前中间件没有终结请求，并且next没有被调用，那么请求将被挂起，后边定义的中间件将得不到被执行的机会。

const middleWears = [
    (req, res, next) => {
        console.log("0");
        next();
    },
    (req, res, next) => {
        console.log("1");
        next();
    },
    (req, res, next) => {
        console.log("2");
        next();
    },
];
app.use("/", middleWears);

app.use("/ajax", (req, res, next) => {
    console.log("ajax");
    next();
    res.send("ajax");
});
// 回调函数称之为中间件
app.use("/api", (req, res) => {
    res.send("word");
    console.log("api");
});

app.listen(8080, () => {
    console.log("localhost:8080");
});