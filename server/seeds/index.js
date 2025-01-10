const seedProducts = require('./product-seeds');
const seedCategories = require('./category-seeds');
const seedUsers = require('./user-seeds');
const seedWatchedProducts = require('./watched-products');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedCategories();
  console.log('\n---- CATEGORY SEEDED');

  await seedUsers();
  console.log('\n----- PRODUCT SEEDED -----\n');
  
  await seedProducts();
  console.log('\n----- PRODUCT SEEDED -----\n');

  await seedWatchedProducts();
  console.log('\n----- PRODUCT SEEDED -----\n');
  

  process.exit(0);
};

seedAll();