const { Room } = require("../db");

/* GET rooms */
exports.allRooms = (req, res, next) => {
  Room.findAll().then((rooms) => {
    res.status(200).send(rooms);
    next();
  });
};

/* GET room */
exports.room = (req, res) => {
  Room.findOne({ where: { id: req.body.roomId } }).then((room) => {
    res.status(200).send(room);
  });
};

/* POST  room */
exports.postRoom = (req, res, next) => {
  const { name } = req.body;

  Room.create({
    name
  }).then((room) => {
    console.log(room);
    res.status(200).json({ message: "Room enregistrée" });
    next();
  });
};

// Put
exports.putRoom = (req, res, next) => {
  const { name } = req.body;
  Room.update(
    {
      name
    },
    {
      where: { id: req.body.roomId },
    },
  ).then((room) => {
    console.log(room);
    res.status(200).json({ message: "Room enregistrée" });
    next();
  });
};

// Delete
exports.deleteRoom = (req, res, next) => {
  Room.destroy({
    where: { id: req.body.roomId },
  }).then((room) => {
    console.log(room);
    res.status(200).json({ message: "Room delete" });
    next();
  });
};
