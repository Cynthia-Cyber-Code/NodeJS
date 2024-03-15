const { body } = require("express-validator");

// using chain api validation from express-validator
const userDataValidateChainMethod = [
    body("firstName")
        .exists({ checkFalsy: true })
        .withMessage("firstname is required")
        .isString()
        .withMessage("firstname should be string"),
    body("lastName")
        .exists({ checkFalsy: true })
        .withMessage("lastname is required")
        .isString()
        .withMessage("lastname should be string"),
    body("userPassword")
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password should be string")
        .isLength({ min: 6 })
        .withMessage("Password should be at least 6 characters"),
    body("email")
        .exists()
        .isEmail()
        .withMessage("Provide valid email"),
    body("phone")
        .optional()
        .isString()
        .withMessage("phone number should be string")
        .custom((value) => {
        if (value.length !== 10) {
            return Promise.reject("Phone number should be 10 digits");
        } else {
            return true;
        }
    }),
];

// using schema-based validation from express-validator
// const userDataValidateSchemaBased = {
//     firstName: {
//         exists: {
//             errorMessage: "firstname is required",
//             options: { checkFalsy: true },
//         },
//         isString: { errorMessage: "firstname should be string" },
//     },
//     lastName: {
//         exists: {
//             errorMessage: "lastname is required",
//             options: { checkFalsy: true },
//         },
//         isString: { errorMessage: "lastname should be string" },
//     },
//     password: {
//         exists: { errorMessage: "Password is required" },
//         isString: { errorMessage: "password should be string" },
//         isLength: {
//             options: { min: 6 },
//             errorMessage: "Password should be at least 6 characters",
//         },
//     },
//     email: {
//         isEmail: { errorMessage: "Please provide valid email" },
//     },
//     phone: {
//         isString: { errorMessage: "phone number should be string" },
//         options: (value) => {
//             value.length === 10;
//         },
//         errorMessage: "Phone number should be 10 digits",
//     },
// };

module.exports = {
    userDataValidateChainMethod,
};