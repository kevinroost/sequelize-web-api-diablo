'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {

    static associate(models) {
      Character.hasMany(models.UniqueItem, {
        foreignKey: 'charId',
        as: 'uniqueItems'
      })
    }
  }

  Character.init({
    name: DataTypes.STRING,
    class: DataTypes.STRING,
    level: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1
      }
    }
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};