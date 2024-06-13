/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("Azerty1234", salt);
    console.log(hashedPassword);
    return queryInterface.bulkInsert("Users", [
      {
        userRole: "isAdmin",
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        phone: "00.00.00.00.00",
        userPassword: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
