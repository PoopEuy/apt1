const express = require("express");
const router = express.Router();

const dockCellController = require("../controllers/dockCell");

router.post("/", dockCellController.create);

module.exports = router;
