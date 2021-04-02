const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 9527 });

// wss.on("connection", function connection(ws) {
//     // 建立链接
//     ws.on("open", function open() {
//         console.log("connected");
//         ws.send(Date.now());
//     });
//     // 接收数据
//     ws.on("message", function incoming(data) {
//         wss.clients.forEach(function each(client) {
//             if (client.readyState === WebSocket.OPEN) {
//                 client.send(data);
//             }
//         });
//     });
//     // 失去链接
//     ws.on("close", function close() {
//         console.log("disconnected");
//     });
// });

let clients = {};
let clientName = 0;

wss.on("connection", (client) => {
    client.name = ++clientName;
    clients[client.name] = client;

    client.on("message", (msg) => {
        broadcast(client, msg);
    });

    client.on("close", () => {
        delete clients[client.name];
        console.log(client.name + " 离开了~");
    });
});

function broadcast(client, msg) {
    for (var key in clients) {
        clients[key].send(client.name + "：" + msg);
    }
}