const express = require("express");
const router = express.Router();

const pvController = require("../controllers/pv");

router.post("/", pvController.create);

module.exports = router;
