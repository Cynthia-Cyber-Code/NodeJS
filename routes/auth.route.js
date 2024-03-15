const express = require("express");

const router = express.Router();
const passwordCheck = require("../middleware/validate_password");
const { userDataValidateChainMethod } = require("../middleware/validators/user.validation");

const authController = require("../controllers/auth.controller");

router.post("/signup", userDataValidateChainMethod, passwordCheck, authController.signup);
router.post("/signin", userDataValidateChainMethod, authController.signin);

router.post("/forgotPassword", authController.forgottenPassword);

module.exports = router;
