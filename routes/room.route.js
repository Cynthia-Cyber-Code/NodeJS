const express = require("express");
const router = express.Router();

const { User } = require("../db")
const roomController= require("../controllers/room.controller")

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
router.put("/change", hasRole(["isAdmin"]), roomController.putRoom);
router.delete("/delete", hasRole(["isAdmin"]), roomController.deleteRoom);

//Access All users
router.get("/rooms", roomController.allRooms);
router.get("/", roomController.room);
router.post("/", roomController.postRoom);
router.put("/", roomController.putRoom);
router.delete("/", roomController.deleteRoom);

module.exports = router;