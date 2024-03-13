'use strict';
const {
  Model
} = require('sequelize');
const { Reservation } = require('../db');
module.exports = (sequelize, DataTypes) => {
  class Meal extends Model {
    static associate(models) {
      Meal.belongsTo(models.Reservation, {
        foreignKey: 'reservationId',
        onDelete: 'CASCADE'
      })
      Reservation.hasOne(models.Meal, {
        foreignKey: 'id',
        onDelete: 'CASCADE'
      })
    }
  }
  Meal.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    category: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    reservationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Meal',
  });
  return Meal;
};