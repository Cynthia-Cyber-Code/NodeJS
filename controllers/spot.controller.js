const { Spot } = require("../utils/db");

/* GET spots */
exports.allSpots = (req, res, next) => {
  Spot.findAll()
    .then((rooms) => {
      res.status(200).json(rooms);
      next();
    })
    .catch((error) => {
      console.error(error);
      res
        .status(500)
        .json({ message: "Impossibilité de récupérer la demande", error });
    });
};

exports.getSpot = (req, res, next) => {
  Spot.findOne({
    where: { id: req.body.spotId },
  })
    .then((spot) => {
      console.log(spot);
      res.status(200).json({ spot });
      next();
    })
    .catch((error) => {
      console.error(error);
      res.status(403).json({
        message: "Veuillez renseigner correctement le numéro du spot demandée",
        error,
      });
    });
};

/* POST  spot */
exports.postSpot = (req, res, next) => {
  const { name } = req.body;
  const { roomId } = req.body;
  Spot.create({
    name,
    roomId
  })
    .then((spot) => {
      console.log(spot);
      res.status(200).json({ message: "Spot enregistrée" });
      next();
    })
    .catch((error) => {
      console.error();
      res
        .status(500)
        .json({ message: "Impossibilité de créer un spot", error });
    });
};

// Put
exports.putSpot = (req, res) => {
  const { name, roomId } = req.body;
  Spot.update(
    {
      name,
      roomId
    },
    {
      where: { id: req.body.spotId },
    },
  )
    .then((spot) => {
      console.log(spot);
      res.status(200).json({ message: "Spot enregistrée" });
    })
    .catch((error) => {
      console.error();
      res
        .status(500)
        .json({ message: "Impossibilité de modifier ce spot", error });
    });
};

// Delete
exports.deleteSpot = (req, res) => {
  Spot.destroy({
    where: { id: req.body.spotId },
  })
    .then((spot) => {
      console.log(spot);
      res.status(200).json({ message: "Room delete" });
    })
    .catch((error) => {
      console.error();
      res
        .status(500)
        .json({ message: "Impossibilité de supprimer ce spot", error });
    });
};
