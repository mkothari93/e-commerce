// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    //Defines id column
    id: {
      //Defines data type as a Integer
      type: DataTypes.INTEGER,

      //Defines that it shouldn't allow null values
      allowNull: false,

      //Defines that this is the Primary Key
      primaryKey: true,

      //Defines to auto increment
      autoIncrement: true
    },

    //Defines product_name column
    product_name: {
      //Defines data type as a String
      type: DataTypes.STRING,

      //Defines that it shouldn't allow null values
      allowNull: false,
    },

    //Defines price column
    price: {
      //Defines data type as a Decimal
      type: DataTypes.DECIMAL,

      //Defines that it shouldn't allow null values
      allowNull: false,

      //Validates that value is a Decimal
      validate: {
        isDecimal: true
      }
    },

    //Defines stock column
    stock: {
      //Defines data type as a Integer
      type: DataTypes.INTEGER,

      //Defines that it shouldn't allow null values
      allowNull: false,

      //Sets a default value of 10
      min: 10,

      //Validates that value is a numeric value
      validate: {
        isNumeric: true
      }
    },

    //Defines category_id column
    category_id: {
      //Defines data type as a Integer
      type: DataTypes.INTEGER,

      //Defines that it shouldn't allow null values
      allowNull: false,

      references: {
        //References to the Category model
        model: Category,

        //Column name of the Category model
        key: 'id'
      }
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
