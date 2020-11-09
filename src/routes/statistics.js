const express = require("express");
const router = express.Router();

const statisticsController = require("../controllers/statistics");

router.post("/", statisticsController.create);

module.exports = router;
