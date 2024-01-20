const express = require('express');
const router = express.Router();
const verifyToken = require("../middleware/verifyJWT")

const authRouter = require('./auth.route');
const usersRouter = require('./user.route');
const reservationsRouter = require('./reservation.route');
const roomsRouter = require('./room.route');
const spotsRouter = require('./spot.route');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({message: "Launch page"});
});

router.use('/auth', authRouter);

router.use('/users', verifyToken, usersRouter);
router.use('/reservations', verifyToken, reservationsRouter);
router.use('/rooms', verifyToken, roomsRouter);
router.use('/spots', verifyToken, spotsRouter);

module.exports = router;
