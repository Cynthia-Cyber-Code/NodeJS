const express = require('express');
const router = express.Router();
const { User } = require("../db")

/* GET users */
router.get('/', (req, res, next) => {
  User.findAll().then(users => {
    res.status(200).send(users);
  });
});

/* GET user */
router.get('/:userId', (req, res, next) => {
  User.findOne({where : {id: req.params.userId}}).then(users => {
    res.status(200).send(users);
  });
});

/*POST  user */
router.post('/', (req, res, next) => {

  const user_role = req.body.user_role; 
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  const user_password = req.body.user_password;

  User.create({
      user_role: user_role,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      user_password: user_password
  }).then(user => { 
    if(typeof user_role !== "string") {
      res.status(422).json({error: "La date n'est n'est pas bon(on attend un format date)"})
    }
    if(typeof firstname !== "string" || typeof lastname !== "string" || typeof email !== "string" || typeof phone !== "string") {
      res.status(422).json({error: "Verifier vos coordonnées"})
    }
    console.log(user);
    res.status(200).json({message: "enregistrée"});
  });
});

//Put
router.put('/:userId', (req, res, next) => {

  const id = req.params.userId;
  const user_role = req.body.user_role; 
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  const user_password = req.body.user_password;

  User.update({
    user_role: user_role,
    firstname: firstname,
    lastname: lastname,
    email: email,
    phone: phone,
    user_password: user_password
  },{ 
    where: { id: req.params.userId }
  }
  ).then(user => { 
    if(typeof user_role !== "string") {
      res.status(422).json({error: "La date n'est n'est pas bon(on attend un format date)"})
    }
    if(typeof firstname !== "string" || typeof lastname !== "string" || typeof email !== "string" || typeof phone !== "string") {
      res.status(422).json({error: "Verifier vos coordonnées"})
    }
    console.log(user);
    res.status(200).json({message: "enregistrée"});
  });
});

//Delete
router.delete('/:userId', (req, res, next) => {

  User.destroy({ 
    where: { id: req.params.userId }
  }
  ).then( user => {
    console.log(user);
    res.status(200).json({message: "User delete"});
  });
});

module.exports = router;
