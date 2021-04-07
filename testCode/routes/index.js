const express = require("express");

const router = express.Router();

const { list } = require("../controllers/index");

router.get("/api/list", list);

module.exports = router;