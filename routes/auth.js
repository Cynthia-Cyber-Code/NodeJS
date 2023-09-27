const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { User } = require("../db")
const SECRET_KEY = 'secretkey23456';

// Sign-up (Inscription)
router.post('/signup', async (req, res) => {
    console.log(req.body);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.user_password, salt);
    console.log(hashedPassword);
    const user = new User ({
        user_role : "customers",
        firstname: req.body.firstname,
        lastname : req.body.lastname,
        email : req.body.email,
        phone : req.body.phone,
        user_password: hashedPassword,
    });
    user.save()
        .then(() => res.status(201).json({message: "Utilisateur créé"}))
        .catch(error => res.status(400).json({error}))
});

// Sign-in (Connexion)
router.post('/signin', async (req, res) => {

    const user = await User.findOne({
        where: {
            lastname: req.body.lastname, 
            firstname: req.body.firstname,
            email: req.body.email
        },
    });
    console.log(user);
    if (!user) return res.status(400).send("Le nom d'utilisateur, l'email ou le mot de passe est incorrect");

    const validPassword = await bcrypt.compare(req.body.user_password, user.user_password);
    if (!validPassword) return res.status(400).send("Le nom d'utilisateur, l'email ou le mot de passe est incorrect");

    const payload = {
        lastname: user.lastname,
        firstname : user.firstname,
        email: user.email,
        user_password : user.user_password
    };

    console.log(payload);

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 60 * 60 * 24 });
    if (!token) return res.status(500).send(error);

    res.status(200).json({message: token});
});

module.exports = router