const express = require("express");
const router = express.Router();

const cutoffController = require("../controllers/cuttoff");

router.get("/", cutoffController.get);
router.post("/", cutoffController.ceateOrUpdate);
router.delete("/:id", cutoffController.destroy);

module.exports = router;
