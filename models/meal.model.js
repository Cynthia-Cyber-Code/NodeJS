const { Model } = require("sequelize");
const { Reservation } = require("./reservation.model");

module.exports = (sequelize, DataTypes) => {
  class Meal extends Model {
    // static associate() {
    //   Meal.hasOne(Reservation, {
    //     foreignKey: "reservationId",
    //     onDelete: "CASCADE",
    //   });
    // }
  }
  Meal.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      price: DataTypes.DOUBLE,
      category: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      reservationId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Meal",
    },
  );
  return Meal;
};
