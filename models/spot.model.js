const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {}
  Spot.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Spot",
    },
  );
  return Spot;
};
