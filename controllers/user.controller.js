const bcrypt = require("bcrypt");

const { User } = require("../utils/db");

/* GET users */
exports.allUsers = (req, res, next) => {
  User.findAll().then((users) => {
    res.status(200).send(users);
    next();
  });
};

/* GET user */
exports.currentUser = (req, res, next) => {
  User.findOne({ where: { id: req.auth.userId } }).then((users) => {
    res.status(200).send(users);
    next();
  });
};

/* POST  user */
exports.addUserByAdmin = async (req, res, next) => {
  console.log(req.body);
  const { email } = req.body;
  const { userRole } = req.body;
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { phone } = req.body;
  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  console.log(emailRegexp.test(email));
  if (!emailRegexp.test(email))
    return res
      .status(400)
      .json({ message: "Veuillez renseigner un email valide." });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.userPassword, salt);
  console.log(hashedPassword);

  const userExist = await User.findOne({ where: { email } });
  if (userExist)
    return res
      .status(403)
      .json({ message: "Ces coordonées ne peuvent pas s'inscrire." });

  if (typeof userRole !== "string") {
    return res
      .status(422)
      .json({ error: "Le role n'est pas correctement défini" });
  }
  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof email !== "string" ||
    typeof phone !== "string"
  ) {
    return res.status(422).json({ error: "Verifier vos coordonnées" });
  }

  User.create({
    userRole,
    firstName,
    lastName,
    email,
    phone,
    userPassword: hashedPassword,
  })
    .then((user) => {
      console.log(userExist);

      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(400).json({ error }));
  return next();
};

// Put
exports.modifyCurrentUser = (req, res) => {
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { email } = req.body;
  const { phone } = req.body;
  const { userPassword } = req.body;

  User.update(
    {
      firstName,
      lastName,
      email,
      phone,
      userPassword,
    },
    {
      where: { id: req.auth.userId },
    },
  )
    .then((user) => {
      console.log(user);
      return res.status(200).json({ message: "enregistrée" });
    })
    .catch((error) => res.status(400).json({ error }));
};

// Put users by admin
exports.modidyUser = (req, res, next) => {
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { email } = req.body;
  const { phone } = req.body;
  const { userPassword } = req.body;

  User.update(
    {
      firstName,
      lastName,
      email,
      phone,
      userPassword,
    },
    {
      where: { id: req.auth.userId },
    },
  ).then((user) => {
    console.log(user);
    res.status(200).json({ message: "enregistrée" });
    next();
  });
};

// Put role isAdmin users
exports.createAdmin = (req, res, next) => {
  User.update(
    {
      userRole: "isAdmin",
    },
    {
      where: { id: req.params.userId },
    },
  ).then((user) => {
    console.log(user);
    res.status(200).json({ message: "enregistrée" });
    next();
  });
};

// Delete
exports.deleteCurentUser = (req, res, next) => {
  User.destroy({
    where: { id: req.auth.userId },
  }).then((user) => {
    console.log(user);
    res.status(200).json({ message: "User delete" });
    next();
  });
};

// Delete User
exports.deleteUser = (req, res, next) => {
  User.destroy({
    where: { id: req.body.id },
  }).then((user) => {
    console.log(user);
    res.status(200).json({ message: "User delete" });
    next();
  });
};
