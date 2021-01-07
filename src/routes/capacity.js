const express = require("express");
const router = express.Router();

const capacityController = require("../controllers/capacity");

router.get("/", capacityController.get);
router.post("/", capacityController.ceateOrUpdate);
// router.put("/:id", statusProgramController.update);
router.delete("/:id", capacityController.destroy);

module.exports = router;
