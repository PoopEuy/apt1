const express = require("express");
const router = express.Router();

const ticketController = require("../controllers/ticket");

router.post("/", ticketController.create);
router.get("/", ticketController.get);
router.put("/:id", ticketController.update);
router.delete("/:id", ticketController.destroy);

module.exports = router;
