const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const { SECRET_KEY } = process.env;

module.exports = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res
      .status(401)
      .json({ auth: false, message: "Veuillez ajouter un token" });
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.auth = {
      userId: `${decoded.id}`,
      userRole: `${decoded.userRole}`,
    };
    console.log(req.auth);
    next();
  } catch (e) {
    res.status(400).json({ auth: false, message: "Token inccorect." });
  }
  return token;
};
