// src/sequelize/index.js
const { Sequelize } = require("sequelize");

// sequelize接続のインスタンス
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db/questions.sqlite3",
  logging: false,
});

const questionDefiner = require("./models/question.model");

// tableを定義
questionDefiner(sequelize);

// 今回定義したsequalize接続のインスタンス
module.exports = sequelize;
