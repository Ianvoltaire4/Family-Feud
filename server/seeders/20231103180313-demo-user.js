'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
      await queryInterface.bulkInsert('Users', [{
        firstName:"Ian",
        lastName:"Voltaire",
        email:"ianv4@example.com",
        username:"Ianv4",
        password:"ianv4",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('User', null, {});
     */
  }
};
