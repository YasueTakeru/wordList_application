// src/register/register.service.js
'use strict';

const { models } = require('../sequelize');

const createQuestion = async (question, choice1, choice2, choice3, choice4, choice5, answer, explain, questionType) => {
  await models.question.create({ question, choice1, choice2, choice3, choice4, choice5, answer, explain, questionType });
};

const deleteQuestion = async (id) => {
  await models.question.destroy({ where: { id: id }});
}

const editQuestion = async (id, question, choice1, choice2, choice3, choice4, choice5, answer, explain, questionType) => {
  const aquestion = await models.question.findOne({ where: { id: id }});
  await aquestion.update({ question, choice1, choice2, choice3, choice4, choice5, answer, explain, questionType });
};

module.exports = {
  createQuestion,
  deleteQuestion,
  editQuestion,
};
