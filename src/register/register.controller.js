// src/register.controller.js
'use strict';

const PromiseRouter = require('express-promise-router');
// これがapp.js内でapp.use("/todo",todoRouter)で呼ばれる。このファイルが今後/todo以降の部分を取得できる。
const registerRouter = PromiseRouter();

const { createQuestion } = require('./register.service');

registerRouter.get('/', (req, res) => {
  res.render('register');
});

registerRouter.post('/', async (req, res) => {
  let choice1, choice2, choice3, choice4, choice5;
  if (req.body.choice1 === null) {
    choice1 = ' ';
  } else {
    choice1 = req.body.choice1;
  }
  if (req.body.choice2 === null) {
    choice2 = ' ';
  } else {
    choice2 = req.body.choice2;
  }
  if (req.body.choice3 === null) {
    choice3 = ' ';
  } else {
    choice3 = req.body.choice3;
  }
  if (req.body.choice4 === null) {
    choice4 = ' ';
  } else {
    choice4 = req.body.choice4;
  }
  if (req.body.choice5 === null) {
    choice5 = ' ';
  } else {
    choice5 = req.body.choice5;
  }
  const answer = parseInt(req.body.answer);
  await createQuestion(req.body.question, choice1, choice2, choice3, choice4, choice5, answer, req.body.explain, req.body.questionType);
  res.redirect('register');
});

module.exports = {
  registerRouter // exportして周囲が取得できるように設定
};
