/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reservations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      numberOfCustomers: {
        type: Sequelize.INTEGER,
      },
      reservationDate: {
        type: Sequelize.DATE,
      },
      reservationName: {
        type: Sequelize.STRING,
      },
      reservationNote: {
        type: Sequelize.STRING,
      },
      reservationStatus: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      spotId: {
        type: Sequelize.INTEGER,
      },
      roomId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Reservations");
  },
};
