const express = require("express");
const router = express.Router();
const { register, login, googleLogin } = require("../controller/auth.controller");

// Auth Routes
router.post("/register", register);
router.post("/login", login);
router.post("/google", googleLogin);

module.exports = router;
