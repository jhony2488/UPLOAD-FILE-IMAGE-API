const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

class AppController {
  constructor() {
    this.express = express()

    this.moongoseConnection()
    this.useJsonUrlEncoded()
    this.morganUse()
    this.middleware()
    this.routes()
    this.server()
  }
  middleware() {
    this.express.use(express.json())
  }
  routes() {
    this.express.use(require('./router'))
  }
  bodyParser() {
    this.express.use(bodyParser.urlencoded({ extended: false }))
    this.express.use(bodyParser.json())
  }
  useJsonUrlEncoded() {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
  }
  morganUse() {
    this.express.use(morgan('dev'))
  }
  moongoseConnection() {
    mongoose.connect('mongodb://localhost:27017/upload', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }
  server() {
    return this.express.listen(8080, () => {
      console.log('servidor funcionando')
    })
  }
}

exports.module = new AppController()
