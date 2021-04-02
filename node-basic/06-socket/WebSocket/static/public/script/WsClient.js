const ws = new WebSocket("ws://localhost:9527/");

ws.onopen = () => {
    ws.send("已进入聊天室!");
};

ws.onmessage = (msg) => {
    const content = document.getElementById("content");
    content.innerHTML += msg.data + "<br/>";
};

ws.onerror = (err) => {
    console.log(err);
};

ws.onclose = () => {
    console.log("closed~");
};