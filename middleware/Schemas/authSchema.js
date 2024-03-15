const Joi = require('joi');

const signupSchema = Joi.object().keys({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).required(),
    userPassword: Joi.string().min(6).required(),
});

const signinSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    userPassword: Joi.string().min(6).required(),
});

module.exports = {
    signinSchema,
    signupSchema
}