const seedBlogs = require('./blog-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBlogs();

  process.exit(0);
};

seedAll();
