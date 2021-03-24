// import important parts of sequelize library
const { Model, DataTypes, STRING } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Blogwriter extends Model { }

// set up fields and rules for Product model
Blogwriter.init(
  {
    // define columns
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    writer_name: {
      type: DataTypes.STRING,
      firstName: STRING,
      lastName: STRING,
      allowNull: false,
    }
  },



  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogWriter',
  }

);

module.exports = Product;
