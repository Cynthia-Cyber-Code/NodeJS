const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {}
  Room.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Room",
    },
  );
  return Room;
};
