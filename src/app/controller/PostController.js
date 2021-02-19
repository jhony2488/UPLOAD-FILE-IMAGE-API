const PostModel = require('../models/Post')

class Post {
  async post(req, res) {
    const post = await PostModel.create({
      name: req.file.originalname,
      size: req.file.size,
      key: req.file.filename,
      url: '',
    })
    res.json(post)
  }
}

module.exports = new Post
