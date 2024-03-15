const express = require("express");
const Joi = require('joi');

const router = express.Router();

const passwordCheck = require("../middleware/validate_password");
const { userDataValidateChainMethod} = require("../middleware/validators/user.validation");
const { signupSchema, signinSchema } = require("../middleware/Schemas/authSchema")

const authController = require("../controllers/auth.controller");

const validateRequest = (schema) => {
    return (req, res, next) => {
    const result = schema.validate(req.body);
      if (result.error) {
        return res.status(400).json({
          error: result.error.details[0].message,
        });
      }
      if (!req.value) {
        req.value = {};
      }
      req.value['body'] = result.value;
      next();
    };
};

router.post("/signup", validateRequest(signupSchema), userDataValidateChainMethod, passwordCheck,authController.signup);
router.post("/signin", validateRequest(signinSchema), userDataValidateChainMethod, authController.signin);

router.post("/forgotPassword", authController.forgottenPassword);

module.exports = router;
