const { Sequelize, DataTypes } = require("sequelize");

const dotenv = require("dotenv");
const e = require("express");

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

const User = require("../models/user.model")(sequelize, DataTypes);
console.log(User);

const Room = require("../models/room.model")(sequelize, DataTypes);
console.log(Room);

const Spot = require("../models/spot.model")(sequelize, DataTypes);
console.log(Spot);

const Reservation = require("../models/reservation.model")(sequelize, DataTypes);
console.log(Reservation);

const Meal = require("../models/meal.model")(sequelize, DataTypes);
console.log(Meal);

const Membership = require("../models/membership.model")(sequelize, DataTypes);
console.log(Membership);

Reservation.belongsToMany(Spot, { through: 'ReservationSpots' });
Spot.belongsToMany(Reservation, { through: 'ReservationSpots' });

sequelize.sync({force: true}).then(
  async () => {
    console.log("database created")
  }
).catch(e => {
  console.error(e)
})

module.exports = {
  Reservation,
  Meal,
  User,
  Room,
  Spot,
  Membership
};
