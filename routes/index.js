const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const usersRouter = require('./user');
const authRouter = require('./auth');

const reservationsRouter = require('./reservation');
const roomsRouter = require('./room');
const spotsRouter = require('./spot');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json({message: "Launch page"});
});

const SECRET_KEY = 'secretkey23456';

const verifyJWT = (req, res, next) => {
        const token = req.header('Authorization');
    
        if(!token) return res.status(401).json({ auth: false, message: 'Veuillez ajouter un token' });
    
        try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
        } catch (e) {
        res.status(400).json({ auth: false, message: 'Token inccorect.' });
        }
};

router.use('/user', usersRouter);
router.use('/auth', authRouter);

router.use('/reservation', verifyJWT, reservationsRouter);
router.use('/room', verifyJWT, roomsRouter);
router.use('/spot', verifyJWT, spotsRouter);

module.exports = router;
