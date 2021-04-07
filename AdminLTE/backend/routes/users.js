var express = require("express");
var router = express.Router();
const { signUp } = require("../controllers/user");

/* post users listing. */
router.post("/signin", signUp);

module.exports = router;