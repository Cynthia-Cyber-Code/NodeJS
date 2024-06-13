'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Memberships", [
      {
      loyalty_status: "Yes",
      number_of_reservations: Math.floor(Math.random() * 10),
      expiration_date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
    },
  ]);
},

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Memberships", null, {});
  }
};
