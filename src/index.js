// src/index.js
'use strict';

// appを取得する。
const app = require('./app');

const sequelize = require('./sequelize');

const main = async () => {
  sequelize.sync();
  // ポート解放
  app.run();
};

main();
