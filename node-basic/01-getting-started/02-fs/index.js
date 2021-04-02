const fs = require("fs");

fs.writeFile("./text.txt", "hello", (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log("创建成功");
    }
});