const express = require("express");

const router = express.Router();
const passwordCheck = require("../middleware/validate_password");

const authController = require("../controllers/auth.controller");

router.post("/signup", passwordCheck, authController.signup);
router.post("/signin", authController.signin);

router.post("/forgotPassword", authController.forgottenPassword);

module.exports = router;
