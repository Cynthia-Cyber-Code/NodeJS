/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("Room", [
      {
        roomId: Math.random() * 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete("Room", null, {});
  },
};
