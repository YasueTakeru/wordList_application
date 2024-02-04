// src/index.js
"use strict";

// appを取得する。
const app = require("./app");

const main = async () => {
  // ポート解放
  app.run();
};

main();
