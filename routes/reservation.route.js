const express = require("express");

const router = express.Router();

const { User } = require("../db");
const reservationController = require("../controllers/reservation.controller");

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
router.put(
  "/modify",
  hasRole(["isAdmin"]),
  reservationController.changeReservation,
);
// router.delete("/deleteReservations", hasRole(["isAdmin"]), reservationController);
router.delete(
  "/delete",
  hasRole(["isAdmin"]),
  reservationController.deleteReservation,
);

// Access All users
router.get("/", reservationController.allReservations);
// router.get("/currentUser", reservationController.allReservations);
router.post("/", reservationController.addReservation);
router.put("/", reservationController.changeReservation);
router.delete("/", reservationController.deleteReservation);

module.exports = router;
