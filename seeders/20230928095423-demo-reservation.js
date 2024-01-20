'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Reservations", [{
      number_of_customers : 8,
      reservation_date : "2026-01-01",
      reservation_name: "Marthy",
      reservation_note: "Pas de note",
      reservation_status: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Reservations', null, {});
  }
};
