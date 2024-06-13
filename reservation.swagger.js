/**
 * @swagger
 * /reservations:
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
 */
router.post('/reservations', reservationValidationRules(), (req, res) => {
    console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    reservationController.createReservation(req, res);
});