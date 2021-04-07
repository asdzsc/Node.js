const signUp = function(req, res, next) {
    res.set("Content-Type", "application/json; charset=utf-8");

    let { username, password } = req.body;

    console.log(req.body);
};

module.exports = {
    signUp,
};