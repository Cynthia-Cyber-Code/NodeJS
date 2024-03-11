const { Sequelize, DataTypes } = require("sequelize");

const dotenv = require("dotenv");

dotenv.config();

const config = require("./config/config").development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  },
);

const Reservation = require("./models/reservation.model")(sequelize, DataTypes);

console.log(Reservation);

const Room = require("./models/room.model")(sequelize, DataTypes);

console.log(Room);

const Spot = require("./models/spot.model")(sequelize, DataTypes);

console.log(Spot);

const User = require("./models/user.model")(sequelize, DataTypes);

console.log(User);

module.exports = {
  Reservation,
  User,
  Room,
  Spot,
};
