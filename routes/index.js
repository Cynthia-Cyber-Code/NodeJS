const express = require('express');
const router = express.Router();

const usersRouter = require('./user');
const reservationsRouter = require('./reservation');
const roomsRouter = require('./room');
const spotsRouter = require('./spot');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({message: "Launch page"});
});

router.use('/user', usersRouter);
router.use('/reservation', reservationsRouter);
router.use('/room', roomsRouter);
router.use('/spot', spotsRouter);

module.exports = router;
