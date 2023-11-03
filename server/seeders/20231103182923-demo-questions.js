'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Questions', [{
        questions: 'Name The Most Used Piece Of Furniture In A House.',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Questions', null, {});
  }
};
