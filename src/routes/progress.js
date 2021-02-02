const express = require("express");
const router = express.Router();

const progressController = require("../controllers/progress");

router.post("/", progressController.create);
router.get("/", progressController.get);
router.put("/:id", progressController.update);
router.delete("/:id", progressController.destroy);

module.exports = router;
