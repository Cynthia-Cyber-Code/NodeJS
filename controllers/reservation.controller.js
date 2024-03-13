const { Reservation } = require("../db");

/* GET reservation */
exports.allReservations = (req, res, next) => {
  Reservation.findAll().then((Reservations) => {
    // Send all reservations to Client
    res.status(200).json(Reservations);
    next();
  });
};

/* GET reservation  of the UserCurrent*/
exports.allReservationsUser = (req, res) => {
    Reservation.findAll({
        where: { id: req.auth.userId }
    }
    ).then(reservation => {
        console.log(reservation);
        res.status(200).json({reservation});
    });
};

// Post
exports.addReservation = (req, res) => {
  const { reservationDate } = req.body;
  const { numberOfCustomers } = req.body;
  const { reservationName } = req.body;
  const { spotId } = req.body;
  const { roomId } = req.body;
  const { reservationNote } = req.body;
  const { userId } = req.auth;
  const reservationStatus = 1;

  Reservation.create({
    numberOfCustomers,
    reservationDate,
    reservationName,
    reservationNote,
    reservationStatus,
    userId,
    spotId,
    roomId,
  })
    .then((reservation) => {
      if (typeof reservationDate !== "string") {
        return res.status(422).json({
          error: "La date n'est n'est pas bon(on attend un format date)",
        });
      }
      if (
        typeof numberOfCustomers !== "number" ||
        !Number.isInteger(numberOfCustomers)
      ) {
        return res.status(422).json({
          error:
            "Le nombre de convive n'est pas bon(Un nombre entier est attendu)",
        });
      }
      if (typeof reservationName !== "string") {
        return res.status(422).json({
          error: "Le nom de la réservation n'est pas bon(Un nom est attendu)",
        });
      }
      if (
        typeof reservationStatus !== "number" ||
        !Number.isInteger(reservationStatus)
      ) {
        return res.status(422).json({ error: "Le status est incorrecte" });
      }
      console.log(reservation);
      return res.status(200).json({ message: "Reservation enregistrée" });
    })
    .catch((error) => {
      console.error(error);
      return res.status(422).json({ message: "Error" });
    });
};

// Put
exports.changeReservation = (req, res) => {
  const { reservationDate } = req.body;
  const { numberOfCustomers } = req.body;
  const { reservationName } = req.body;
  const { spotId } = req.body;
  const { roomId } = req.body;
  const { reservationNote } = req.body;

  Reservation.update(
    {
      numberOfCustomers,
      reservationDate,
      reservationName,
      spotId,
      roomId,
      reservationNote,
    },
    { where: { id: req.body.reservationId, userId: req.auth.userId } },
  ).then((reservation) => {
    if (typeof reservationDate !== "string") {
      return res.status(422).json({
        error: "La date n'est n'est pas bon(on attend un format date)",
      });
    }
    if (
      typeof numberOfCustomers !== "number" ||
      !Number.isInteger(numberOfCustomers)
    ) {
      return res.status(422).json({
        error:
          "Le nombre de convive n'est pas bon(Un nombre entier est attendu)",
      });
    }
    if (typeof reservationName !== "string") {
      return res.status(422).json({
        error: "Le nom de la réservation n'est pas bon(Un nom est attendu)",
      });
    }
    console.log(reservation);
    return res.status(200).json({ message: "Reservation modifiée" });
  });
};

// Delete
exports.deleteReservation = (req, res, next) => {
  Reservation.destroy({
    where: { id: req.body.reservationId, userId: req.auth.userId },
  })
    .then((reservation) => {
      console.log(reservation);
      res.status(200).json({ message: "Reservation delete" });
      next();
    })
    .catch((error) => {
      console.error(error);
      res.status(404).json({ message: "Not found" });
    });
};
