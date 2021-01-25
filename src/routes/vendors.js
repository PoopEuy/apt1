const express = require("express");
const router = express.Router();

const vendorsController = require("../controllers/vendor");

router.post("/", vendorsController.create);
router.get("/", vendorsController.get);
router.put("/:id", vendorsController.update);

module.exports = router;
