const express = require("express");
const router = express.Router();

const energyController = require("../controllers/energy");

router.post("/", energyController.create);

module.exports = router;
