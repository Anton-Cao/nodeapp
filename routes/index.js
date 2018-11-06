var express = require('express');
var router = express.Router();
var Post = require('../models/Post');

/* 
GET home page.
This endpoint is hit whenever the webpage is visited.
*/
router.get('/', function(req, res, next) {
  Post.find({}).sort('-date').exec(function(err, postObjs) { // gets all posts in reverse chronological order
    if (err) {
      res.render('error', { message: err });
    } else {
      // the feed template only needs the content of each post, not the date or ObjectID
      posts = postObjs.map(postObj => postObj.content); 
      res.render('feed', { posts: posts });
    }
  })
});

/* 
POST a new comment.
This endpoint is hit by the HTTP call in `feed.js`
*/
router.post('/newpost', function(req, res, next) {
  // create a new Post object
  var newPost = new Post({ 
    content: req.body.post,
    date: new Date(), // new Date() returns the current date time
  }); 
  newPost.save(function(err) {
    if (err) {
      res.render('error', { message: err }); // return error template if saving failed
    } else {
      res.send('received'); // make sure you return something, otherwise the HTTP request will hang
    }
  });
});

module.exports = router;
