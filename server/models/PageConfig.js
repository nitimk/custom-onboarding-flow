const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PageConfig = sequelize.define('PageConfig', {
  pageNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  component: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = PageConfig;
