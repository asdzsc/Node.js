const bcrypt = require("bcrypt");
// 用hash的方式加密
exports.hash = (myPlaintextPassword) => {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt(10, function(err, salt) {
			bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
				if (err) {
					reject(err);
				}
				resolve(hash);
			});
		});
	});
};
// 验证密码是否正确
exports.compare = (myPlaintextPassword, hash) => {
	return new Promise((resolve, reject) => {
		bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
			// result == true
			resolve(result)
		});
	})
}
