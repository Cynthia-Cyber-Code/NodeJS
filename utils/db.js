const { Sequelize, DataTypes } = require("sequelize");

const dotenv = require("dotenv");

dotenv.config();
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  },
);

const Reservation = require("../models/reservation.model")(sequelize, DataTypes);

console.log(Reservation);

const Meal = require("../models/meal.model")(sequelize, DataTypes);

console.log(Meal);

const Room = require("../models/room.model")(sequelize, DataTypes);

console.log(Room);

const Spot = require("../models/spot.model")(sequelize, DataTypes);

console.log(Spot);

const User = require("../models/user.model")(sequelize, DataTypes);

console.log(User);

module.exports = {
  Reservation,
  Meal,
  User,
  Room,
  Spot,
};
