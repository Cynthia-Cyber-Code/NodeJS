/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("Spots", [
      {
        name: "view facing the sea",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete("Spots", null, {});
  },
};
