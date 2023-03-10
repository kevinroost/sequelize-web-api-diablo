'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {

    static associate(models) {
      Character.hasMany(models.UniqueWeapon, {
        foreignKey: 'charId',
        as: 'uniqueWeapons'
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