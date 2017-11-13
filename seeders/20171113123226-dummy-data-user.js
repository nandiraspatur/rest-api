'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      first_name: 'Nandira',
      last_name: 'Paturohman',
      email: 'nandira@mail.com',
      username: 'nandirasp',
      password: '$2a$10$6ukSJLGpKUEpHq3t4z0zMOnGIjSONk8ik1A3AZv.aArtxRgiR7rXi',
      is_admin: 'true'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
