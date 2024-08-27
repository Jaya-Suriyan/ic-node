"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Products", [
      {
        productname: "product1",
        category: "category1",
        record_count: 100,
        field_list: ["field1", "field2", "field3"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productname: "product2",
        category: "category2",
        record_count: 100,
        field_list: ["field4", "field5", "field6"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productname: "product3",
        category: "category3",
        record_count: 100,
        field_list: ["field7", "field8", "field9"],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
