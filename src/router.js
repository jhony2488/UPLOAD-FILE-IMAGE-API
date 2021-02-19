const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')
const PostController = require('./app/controller/PostController')

const router = express.Router()

router.post('/posts', multer(multerConfig).single('file'), PostController.post)

module.exports = router
