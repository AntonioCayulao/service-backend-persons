"use strict";

module.exports = function (sequelize, DataType) {
  var People = sequelize.define('People', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rut: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    lastname: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    age: {
      type: DataType.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    course: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });
  return People;
};