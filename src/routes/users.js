const express = require("express");
const router = express.Router();

const usersController = require("../controllers/user");

router.post("/register", usersController.register);
router.post("/login", usersController.login);
// router.post("/logout", usersHandler.logout);
// router.put("/:id", usersHandler.update);
// router.get("/:id", usersHandler.getUser);
// router.get("/", usersHandler.getUsers);

module.exports = router;
