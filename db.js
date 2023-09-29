const {Sequelize, DataTypes} = require("sequelize");

const dotenv = require("dotenv");
dotenv.config();

const config = require("./config/config.json")["development"];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});

const Reservation = require('./models/reservation')(sequelize, DataTypes);
console.log(Reservation);

const Room = require('./models/room')(sequelize, DataTypes);
console.log(Room);

const Spot = require('./models/spot')(sequelize, DataTypes);
console.log(Spot);

const User = require('./models/user')(sequelize, DataTypes);
console.log(User);

module.exports = {
    Reservation,
    User,
    Room,
    Spot
};