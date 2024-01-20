const passwordSchema = require("./password_schema")

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.user_password)) {
        res.writeHead(
        400,
        "Le mot de passe doit comprendre 6 caractères dont un chiffre, sans espaces",
        {
            "content-type": "application/json",
        }
        );
        res.end("Le format du mot de passe est incorrect.");
    } else {
        next();
    }
};
