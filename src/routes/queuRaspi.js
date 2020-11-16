const express = require("express");
const router = express.Router();

const QueueRaspiController = require("../controllers/queueRaspi");

router.get("/", QueueRaspiController.get);
router.post("/", QueueRaspiController.create);
router.put("/:id", QueueRaspiController.update);

module.exports = router;
