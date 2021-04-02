// 服务端
// const net = require("net");
// const client = net.createConnection({ port: 9527 }, () => {
//     // 'connect' 监听器
//     console.log("已连接到服务器");
//     // 写数据
//     client.write("word!\r\n");
// });
// client.on("data", (data) => {
//     console.log(data.toString());
//     // client.end();
// });
// client.on("end", () => {
//     console.log("已从服务器断开");
// });

var net = require("net");
const readline = require("readline");

var port = 9527;
var host = "127.0.0.1";

var socket = new net.Socket();

socket.setEncoding = "UTF-8";

socket.connect(port, host, () => {
    socket.write("hello.");
});

socket.on("data", (msg) => {
    console.log(msg.toString());
    say();
});

socket.on("error", function(err) {
    console.log("error" + err);
});

socket.on("close", function() {
    console.log("connection closeed");
});

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function say() {
    r1.question("请输入：\n", (inputMsg) => {
        if (inputMsg != "bye") {
            socket.write(inputMsg + "\n");
        } else {
            socket.destroy();
            r1.close();
        }
    });
}