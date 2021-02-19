const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

const router = express.Router()

router.post('/posts', multer(multerConfig).single('file'), (req, res) => {
  res.json(req.file)
})

module.exports = router
