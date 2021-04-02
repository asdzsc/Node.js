const crypto = require("crypto");

const passWord = "hello 你好";

const hash = crypto
    .createHash("sha256")
    .update(passWord, "utf-8")
    .digest("hex"); //('sha1 采用的算法 update 更新加密  digest加密的方式 hex 十六进制')

console.log(hash);