const express = require("express");
const router = express.Router();

const { User } = require("../db")
const spotController= require("../controllers/spot.controller")

function hasRole(roles) {
    return async (req, res, next) => {
        const user = await User.findOne({ where: { id: req.auth.user_id} });
        if (!user || !roles.includes(user.user_role)) {
        return res.status(403).send({error: { status: 403, message: 'Access denied.'}});
        }
        next();
    }
}
//Access Admin
router.put("/change", hasRole(["isAdmin"]), spotController.putSpot);
router.delete("/delete", hasRole(["isAdmin"]), spotController.deleteSpot);

//Access All users
router.get("/all", spotController.allSpots);
router.get("/", spotController.getSpot);
router.post("/", spotController.postSpot);
router.put("/", spotController.putSpot);
router.delete("/", spotController.deleteSpot);

module.exports = router;