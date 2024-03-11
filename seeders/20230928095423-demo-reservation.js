/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("Reservations", [
      {
        numberOfCustomers: 8,
        reservationDate: "2026-01-01",
        reservationName: "Marthy",
        reservationNote: "Pas de note",
        reservationStatus: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete("Reservations", null, {});
  },
};
