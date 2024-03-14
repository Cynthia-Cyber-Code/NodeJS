/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("Users", [
      {
        userRole: "isAdmin",
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        phone: "00.00.00.00.00",
        userPassword: "Azerty123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
