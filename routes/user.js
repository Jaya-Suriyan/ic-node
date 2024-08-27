const express = require("express");
const UserController = require("../controllers/user");
const authToken = require("../helper/jwt");
const router = new express.Router();
// userRouter.use(authenticateUser);

router.post("/login", UserController.login);
router.post("/", UserController.insertUser);

module.exports = router;
