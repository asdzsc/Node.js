const {
	verify
} = require("../utils/tool");
const auth = (req, res, next) => {
	// if (req.session.username) {
	// 	next()
	// } else {
	// 	res.render("fail", {
	// 		data: JSON.stringify({
	// 			message: "请登录！"
	// 		}),
	// 	});
	// }
	const token = req.get("X-Access-Token")
	try {
		let decoded = verify(token)
		 next()
	} catch (e) {
		res.render("fail", {
			data: JSON.stringify({
				message: "请登录！"
			}),
		});
	}
}
exports.auth = auth
