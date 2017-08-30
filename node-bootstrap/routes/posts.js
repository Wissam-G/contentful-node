var express = require('express')
var router = express.Router()
var posts = require('../services/posts')

/* router params */
router.param('slug', function (req, res, next, slug) {
  posts.getPost(slug).then(function (post) {
    req.post = post.items[0]
    next()
  })
})

router.use(function (req, res, next) {
  posts.getPosts().then(function (post) {
    req.posts = post.items
    next()
  })
})

router.get('/posts/:slug', function (req, res, next) {
  res.render('posts', {title: req.post.fields.posttName, post: req.post})
})

router.get('/posts', function (req, res, next) {
  res.render('posts', {
    'title': 'Posts',
    'posts': req.posts
  })
})

router.get('/', function (req, res, next) {
  res.render('posts', {
    'title': 'Posts',
    'posts': req.posts
  })
})

module.exports = router
