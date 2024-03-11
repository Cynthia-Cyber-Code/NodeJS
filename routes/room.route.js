const express = require("express");

const router = express.Router();

const { User } = require("../db");
const roomController = require("../controllers/room.controller");

function hasRole(roles) {
  return async (req, res) => {
    const user = await User.findOne({ where: { id: req.auth.userId } });
    if (!user || !roles.includes(user.userRole)) {
      return res
        .status(403)
        .send({ error: { status: 403, message: "Access denied." } });
    }
    return user;
  };
}
// Access Admin
router.put("/change", hasRole(["isAdmin"]), roomController.putRoom);
router.delete("/delete", hasRole(["isAdmin"]), roomController.deleteRoom);

// Access All users
router.get("/rooms", roomController.allRooms);
router.get("/", roomController.room);
router.post("/", roomController.postRoom);
router.put("/", roomController.putRoom);
router.delete("/", roomController.deleteRoom);

module.exports = router;
