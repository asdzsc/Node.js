//服务端
// const net = require("net");

// const server = net.createServer((socket) => {
//     // 写数据
//     socket.write("你好");
//     // 监听数据
//     socket.on("data", (chunk) => {
//         console.log(chunk.toString());
//     });
// });

// // 处理异常
// server.on("error", (err) => {
//     // 处理错误
//     throw err;
// });

// // 获取任意未使用的端口。
// server.listen("9527", () => {
//     console.log("打开服务器", server.address());
// });

const net = require("net");

const server = new net.createServer();

let clients = {};
let clientName = 0;

server.on("connection", (client) => {
    client.name = ++clientName;
    clients[client.name] = client;

    client.on("data", (msg) => {
        // console.log('客户端传来：' + msg);
        broadcast(client, msg.toString());
    });

    client.on("error", (e) => {
        console.log("client error" + e);
        client.end();
    });

    client.on("close", (data) => {
        delete clients[client.name];
        console.log(client.name + " 下线了");
    });
});

function broadcast(client, msg) {
    for (var key in clients) {
        clients[key].write(client.name + " 说：" + msg);
    }
}

server.listen(9527, "localhost");