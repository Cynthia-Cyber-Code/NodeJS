const express = require("express");

const router = express.Router();

const { User } = require("../db");
const userController = require("../controllers/user.controller");
const passwordCheck = require("../middleware/validate_password");

function hasRole(roles) {
  return async (req, res, next) => {
    const user = await User.findOne({ where: { id: req.auth.userId } });
    if (!user || !roles.includes(user.userRole)) {
      return res.status(403).send({ error: { status: 403, message: 'Access denied.' } });
    }
    next();
    return user;
  };
}
// Access Admin
router.get("/", hasRole(["isAdmin"]), userController.allUsers);
router.post("/AddUser", hasRole(["isAdmin"]), passwordCheck, userController.addUserByAdmin);
router.put("/roleAdmin", hasRole(["isAdmin"]), userController.createAdmin);
router.delete("/deleteUser", hasRole(["isAdmin"]), userController.modidyUser);

// Access All users
router.get("/me", userController.currentUser);
router.put("/", userController.modifyCurrentUser);
router.delete("/", userController.deleteCurentUser);

module.exports = router;
