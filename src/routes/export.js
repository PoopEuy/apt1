const express = require("express");
const router = express.Router();

const exportsController = require("../controllers/exports");

router.get("/", exportsController.sla3);

module.exports = router;
