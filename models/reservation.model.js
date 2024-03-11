'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reservation.init({
    numberOfCustomers: DataTypes.INTEGER,
    reservationDate: DataTypes.DATE,
    reservationName: DataTypes.STRING,
    reservationNote: DataTypes.STRING,
    reservationStatus: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};