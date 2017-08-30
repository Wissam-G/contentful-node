var express = require('express')
var router = express.Router()
var posts = require('../services/posts')

/* GET home page. */
router.use(function (req, res, next) {
  posts.getPosts().then(function (posts) {
    req.posts = post
    next()
  })
})

router.get('/', function (req, res, next) {
  res.render('posts', {
    'title': 'Posts',
    'posts': req.posts
  })
})

module.exports = router
