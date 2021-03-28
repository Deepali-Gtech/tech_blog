const { User } = require('../models');

const userData = [
  {
    name: 'Mike',
    email: "mike@test.com",
    password: '$2b$10$T3rNi8ffxFVZTIx46LpNce9QZRPy4x8teUXQvDqy8mUy20PVcuC9e',
  },
  {
    name: 'Smith',
    email: "smith@test.com",
    password: '$2b$10$T3rNi8ffxFVZTIx46LpNce9QZRPy4x8teUXQvDqy8mUy20PVcuC9e',
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
