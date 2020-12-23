const express = require("express");
const router = express.Router();

const statusProgramController = require("../controllers/statusProgram");

router.get("/", statusProgramController.get);
router.post("/", statusProgramController.ceateOrUpdate);
router.put("/:id", statusProgramController.update);
router.delete("/:id", statusProgramController.destroy);

module.exports = router;
