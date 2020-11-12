const express = require("express");
const router = express.Router();

const ServiceCallController = require("../controllers/serviceCall");

router.get("/", ServiceCallController.getService);

module.exports = router;
