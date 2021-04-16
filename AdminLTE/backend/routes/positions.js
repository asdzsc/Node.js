var express = require("express");
var router = express.Router();

const {
	add,
	list
} = require("../controllers/position");

router.post('/add',add)
router.get('/list',list)

module.exports = router;