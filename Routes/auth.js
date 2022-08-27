const express = require("express");
const { login, dashBoard, register } = require("../Controllers/auth");
const authenticationMiddleware = require("../Middlewares/auth");
const router = express.Router();
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/dashboard").get(authenticationMiddleware, dashBoard);
module.exports = router;
