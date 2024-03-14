const express = require("express");

const router = express.Router();

const { User } = require("../utils/db");
const reservationController = require("../controllers/reservation.controller");
const mealController = require("../controllers/meal.controller");

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
router.get("/", hasRole(["isAdmin"]), reservationController.allReservations);
router.put(
  "/modify",
  hasRole(["isAdmin"]),
  reservationController.changeReservation,
);
router.delete(
  "/delete",
  hasRole(["isAdmin"]),
  reservationController.deleteReservation,
);

// Access All users
router.get("/currentUser", reservationController.allReservationsUser);
router.post("/", reservationController.addReservation);
router.put("/", reservationController.changeReservation);
router.delete("/", reservationController.deleteReservation);

// Access Meals
router.get("/Meals", mealController.allMeals);
router.post("/Meals", mealController.addMeal);
router.put("/Meals", mealController.updateMeal);
router.delete("/Meals", mealController.deleteMeal);

module.exports = router;
