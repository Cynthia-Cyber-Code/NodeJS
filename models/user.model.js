const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init(
    {
      userRole: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      userPassword: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    },
  );
  return User;
};
