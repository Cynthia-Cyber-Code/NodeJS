const express = require("express");

const router = express.Router();

const { User } = require("../utils/db");
const spotController = require("../controllers/spot.controller");

function hasRole(roles) {
  return async (req, res, next) => {
    const user = await User.findOne({ where: { id: req.auth.userId } });
    if (!user || !roles.includes(user.userRole)) {
      return res
        .status(403)
        .send({ error: { status: 403, message: "Access denied." } });
    }
    next();
    return user;
  };
}
// Access Admin
router.put("/change", hasRole(["isAdmin"]), spotController.putSpot);
router.delete("/delete", hasRole(["isAdmin"]), spotController.deleteSpot);

// Access All users
router.get("/all", spotController.allSpots);
router.get("/", spotController.getSpot);
router.post("/", spotController.postSpot);
router.put("/", spotController.putSpot);
router.delete("/", spotController.deleteSpot);

module.exports = router;
