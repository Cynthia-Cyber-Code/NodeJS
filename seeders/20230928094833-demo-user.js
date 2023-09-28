'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("User", [{
      user_role : "customers",
      firstName: "John",
      lastName: "Doe",
      email: "example@example.com",
      phone : "00.00.00.00.00",
      user_password : "123",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('User', null, {});
  }
};
