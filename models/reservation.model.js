const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    static associate(models) {
      Reservation.belongsToMany(models.Spot, {
        through: 'ReservationSpots',
        foreignKey: 'ReservationId'
      });
    }
  }
  Reservation.init(
    {
      numberOfCustomers: DataTypes.INTEGER,
      reservationDate: DataTypes.DATE,
      reservationName: DataTypes.STRING,
      reservationNote: DataTypes.STRING,
      reservationStatus: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      spotId: DataTypes.INTEGER,
      roomId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Reservation",
    },
  );
  return Reservation;
};
