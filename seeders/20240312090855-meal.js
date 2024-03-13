/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert("Meals", [
      {
        title: "Rice",
        content: "white rice",
        price: 5.0,
        category: "accompaniment",
        quantity: 1,
        reservationId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete("Meals", null, {});
  },
};
