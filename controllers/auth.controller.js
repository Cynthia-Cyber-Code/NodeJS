const express = require("express");

const router = express.Router();
const nodemailer = require("nodemailer");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { User } = require("../db");

const { SECRET_KEY, HOTMAIL_ADDRESS } = process.env;

// Sign-up (Inscription)
exports.signup = async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
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

  const user = new User({
    userRole: "customers",
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    userPassword: hashedPassword,
  });
  const userExist = await User.findOne({ where: { email: req.body.email } });
  console.log(userExist);
  if (userExist)
    return res.status(403).json({
      message: "Vous ne pouvez pas vous inscrire avec ces cordonnées.",
    });

  return user
    .save()
    .then(() => res.status(201).json({ message: "Utilisateur créé" }))
    .catch((error) => res.status(400).json({ error }));
};

// Sign-in (Connexion)
exports.signin = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  // console.log(user);
  if (!user)
    return res.status(400).json({
      message: "Le nom d'utilisateur, l'email ou le mot de passe est incorrect",
    });

  const validPassword = await bcrypt.compare(
    req.body.userPassword,
    user.userPassword,
  );
  if (!validPassword)
    return res.status(400).json({
      message: "Le nom d'utilisateur, l'email ou le mot de passe est incorrect",
    });

  const payload = {
    id: user.id,
    email: user.email,
    userPassword: user.userPassword,
    userRole: user.userRole,
  };

  // console.log(payload);

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 60 * 60 * 24 });
  if (!token) return res.status(500).send({ message: "error return Token" });

  res.body = token;
  return res.status(200).json({ jwt: token, status: res.status });
};

router.post("/forgotPassword", async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Génération d'un token de réinitialisation
    const resetToken = await bcrypt.genSalt(20);
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 heure
    await user.save();

    // Fonction pour envoyer l'email
    const sendResetPasswordEmail = async (userSend, resetUrl) => {
      const mailOptions = {
        from: HOTMAIL_ADDRESS,
        to: userSend.email,
        subject: "Réinitialisation de mot de passe",
        // text: `Bonjour, veuillez cliquer sur le lien suivant pour réinitialiser votre mot de passe: ${resetUrl}`,
        html: `<p>Bonjour,</p><p>Veuillez cliquer sur le lien suivant pour réinitialiser votre mot de passe:</p><a href="${resetUrl}">${resetUrl}</a>`,
      };
      // Configuration de Nodemailer
      const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
          user: process.env.EMAIL_ADRESS,
          pass: process.env.password,
        },
      });

      try {
        await transporter.sendMail(mailOptions);
        console.log("Email de réinitialisation envoyé.");
      } catch (error) {
        console.error("Erreur lors de l’envoi de l’email: ", error);
      }
    };

    // Envoyer l'email ici
    const link = `http://localhost:8080/forget-password/${resetToken}`;
    await sendResetPasswordEmail(user, link);

    return res.status(200).json({ message: "Email sent for password reset" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error in password reset process" });
  }
});
