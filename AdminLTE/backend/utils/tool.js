const bcrypt = require("bcrypt");

const fs = require("fs")
const path = require("path")
const jwt = require('jsonwebtoken');

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

// 采用token 非对称 加密
exports.sign = (username) => {
	const privateKey = fs.readFileSync(path.resolve(__dirname, '../keys/rsa_private_key.pem'))
	const token = jwt.sign({
		username
	}, privateKey, {
		algorithm: "RS256"
	})
	return token
}

// token 解密
exports.verify = (token) => {
	const publicKey = fs.readFileSync(path.resolve(__dirname, '../keys/rsa_public_key.pem'))
	const result = jwt.verify(token, publicKey)
	return result
}
