const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'custom_onboarding_db',
  'postgres',
  'yourpassword',
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

module.exports = sequelize;
