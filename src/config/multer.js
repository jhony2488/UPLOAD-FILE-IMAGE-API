const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'upload'),
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'upload'))
    },
    filename: (req, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) {
          callback(err)
        } else {
          const filename = `${hash.toString('hex')}-${file.originalname}`
          callback(null, filename)
        }
      })
    },
  }),
  limits: {
    fileSize: 1 * 1024 * 1024,
  },
  filefilter: (req, file, callback) => {
    const allowMimes = ['image/jpeg', 'image/png', 'image/pjpeg']
    if (allowMimes.includes(file.mimetype)) {
      callback(null, true)
    } else {
      callback(new Error('Invalid FilE Type'))
    }
  },
}
