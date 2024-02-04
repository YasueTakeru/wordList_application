// src/register.controller.js

const PromiseRouter = require("express-promise-router");
// これがapp.js内でapp.use("/todo",todoRouter)で呼ばれる。このファイルが今後/todo以降の部分を取得できる。
const registerRouter = PromiseRouter();

registerRouter.get("/", (req, res) => {
  res.render("register");
});

module.exports = {
  registerRouter, // exportして周囲が取得できるように設定
};
  