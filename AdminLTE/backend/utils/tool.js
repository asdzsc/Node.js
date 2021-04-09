const bcrypt = require("bcrypt");
// 用hash的方式加密
exports.hash = (myPlaintextPassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
            if (err) {
                reject(err);
            }
            resolve(hash);
        });
    });
};