const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
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

    //Defines tag_name column
    tag_name: {
      //Defines data type as a String
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
