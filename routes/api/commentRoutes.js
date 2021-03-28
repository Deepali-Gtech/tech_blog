const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  // create a new tag
  try {
    const CommentData = await Comment.create({
      blog_id: req.body.blog_id,
      content: req.body.content,
      user_id: req.session.user_id,
      
    });
    res.status(200).json(CommentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;