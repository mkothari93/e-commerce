const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');
const Tag = require('./Tag');

class ProductTag extends Model {}

ProductTag.init(
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

    //Defines product_id column
    product_id: {
      //Defines data type as a Integer
      type: DataTypes.INTEGER,
      references: {
        //References to the Product model
        model: Product,
        //Column name of the Product model
        key: 'id'
      }
    },

    //Defines tag_id column
    tag_id: {
      //Defines data type as a Integer
      type: DataTypes.INTEGER,
      references: {
        //References to the Tag model
        model: Tag,
        //Column name of the Tag model
        key: 'id'
      }
    }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
