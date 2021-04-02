const express = require("express");

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static("./static/public"));

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
    console.log("a user connected");
    // 向客户端返回数据
    socket.on("receive", (data) => {
        // console.log(data);
        // socket.broadcast.emit("message", data);
        // 接收客户端返回的数据 广播出去
        socket.broadcast.emit("message");
    });
});

//3000,'端口地址'
http.listen(3000, () => {
    console.log("listening on *:3000");
});
// http.listen(3000, "127.0.0.1", () => {
//     console.log("listening on *:3000");
// });

// http.listen(3000, "127.0.0.1");