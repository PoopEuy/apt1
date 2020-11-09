const express = require("express");
const router = express.Router();

const loggerController = require("../controllers/logger");

router.post("/", loggerController.create);

module.exports = router;
