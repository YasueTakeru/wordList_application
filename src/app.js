// src/app.js
const path = require('path')

const PromiseRouter = require('express-promise-router')
const express = require('express')

const methodOverride = require('method-override')

const PORT = 3000

const run = () => {
  const app = express()

  // テンプレートエンジンとしてejsを使うことを設定する
  app.set('view engine', 'ejs')
  app.set('views', path.resolve(__dirname, 'views'))

  app.use(methodOverride('_method'))

  // リクエストボディをパースする
  app.use(express.urlencoded({ extended: true }))

  // 静的ファイルを提供する
  app.use(express.static(path.resolve(__dirname, 'public')))

  // ルーティング
  const router = PromiseRouter()
  app.use(router)

  router.get('/', (req, res) => {
    res.render('main')
  })

  // 3000番にポート解放
  app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`)
  })
}

// runをexportする。
module.exports = {
  run
}
