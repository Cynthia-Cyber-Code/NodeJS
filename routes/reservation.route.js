const express = require("express");

const router = express.Router();

const { User } = require("../db");
const reservationController = require("../controllers/reservation.controller");
const MealController = require("../controllers/Meal.controller");

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
router.put("/modify", hasRole(["isAdmin"]), reservationController.changeReservation);
// router.delete("/deleteReservations", hasRole(["isAdmin"]), reservationController);
router.delete("/delete", hasRole(["isAdmin"]), reservationController.deleteReservation);

// Access All users
router.get("/currentUser", reservationController.allReservationsUser);
router.post("/", reservationController.addReservation);
router.put("/", reservationController.changeReservation);
router.delete("/", reservationController.deleteReservation);

//Access Meals
router.get("/Meals", MealController.allMeals);
router.post("/Meals", MealController.addMeal);
router.put("/Meals", MealController.updateMeal);
router.delete("/Meals", MealController.deleteMeal);

module.exports = router;
