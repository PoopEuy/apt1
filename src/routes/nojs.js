const express = require("express");
const router = express.Router();

const nojsUserController = require("../controllers/nojs");

router.post("/", nojsUserController.create);
router.get("/", nojsUserController.getNojs);
router.put("/:id", nojsUserController.update);

module.exports = router;
