// src/sequelize/models/question.models.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Question = sequelize.define('question', {
    id: {
      allowNull: false,
      autoIncrement: true, // カウントアップしていく
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    question: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    choice1: {
      type: DataTypes.TEXT
    },
    choice2: {
      type: DataTypes.TEXT
    },
    choice3: {
      type: DataTypes.TEXT
    },
    choice4: {
      type: DataTypes.TEXT
    },
    choice5: {
      type: DataTypes.TEXT
    },
    answer: {
      allowNull: false,
      type: DataTypes.NUMBER
    },
    explain: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    questionType: {
      allowNull: false,
      type: DataTypes.ENUM('edu', 'normal')
    }
  });
  return Question;
};
