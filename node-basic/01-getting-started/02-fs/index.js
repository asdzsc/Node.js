const fs = require("fs");

fs.writeFile("./text.txt", "hello", (err, data) => {
    if (err) {
        throw err;
    } else {
        console.log("εε»Ίζε");
    }
});