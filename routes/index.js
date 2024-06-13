const express = require("express");

const router = express.Router();
const verifyToken = require("../middleware/verifyJWT");

const authRouter = require("./auth.route");
const usersRouter = require("./user.route");
const reservationsRouter = require("./reservation.route");
const roomsRouter = require("./room.route");
const spotsRouter = require("./spot.route");

/* GET home page. */
router.get("/", (req, res) => {
  res.json({ message: "Launch page" });
});

/**
 * @swagger
 * /api/reservations:
 *   get:
 *     summary: Récupérer une reservation
 *     description: Récupère toute les reservations d'un utilisateur dans la base de données
 *     responses:
 *        200:
 *         description: Reservations récupéré avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                    type: string
 *                    example: "Vos réservations"
 *   post:
 *     summary: Effectuer une reservation
 *     description: Ajoute une reservation dans la base de données
 *     responses:
 *       200:
 *         description: Reservation effectuée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Votre reservation a bien été enregistrée"
 *   put:
 *     summary: Modifie une reservation
 *     description: Modifie une reservation dans la base de données
 *     responses:
 *       200:
 *         description: Reservation modifie avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Votre reservation a été modifiée avec succès"
 */

router.use("/auth", authRouter);

router.use("/users", verifyToken, usersRouter);
router.use("/reservations", verifyToken, reservationsRouter);
router.use("/rooms", verifyToken, roomsRouter);
router.use("/spots", verifyToken, spotsRouter);

module.exports = router;
