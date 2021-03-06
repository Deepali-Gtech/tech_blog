const router = require("express").Router();

const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get("/", async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('homepage', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User }],
      where: {
        user_id: req.session.user_id,
      },
    });

    // Serialize data so the template can read it
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('dashboard', {
      blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/newblog', withAuth, async (req, res) => {
  try {
    // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
    res.render('newblog', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/blog', withAuth, async (req, res) => {
  try {
    // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  
  const blogData = await Blog.findByPk(req.query.id, {
    include: [
      {
        model: User,
        attributes: ['name'],
      },
    ],
  });

  const blog = blogData.get({ plain: true });

    res.render('blog', {
      blog,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/comments', withAuth, async (req, res) => {
  try {
    // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  
  const blogData = await Blog.findByPk(req.query.id);
  const blog = blogData.get({ plain: true });

  const commentData = await Comment.findAll({
    include: [
      {
        model: User,
        attributes: ['name'],
      },
      {
        model: Blog,
        attributes: ['content', 'title'],
      },
    ],
    where: {
      blog_id: req.query.id,
    },
  });

  const comments = commentData.map((comment) => comment.get({ plain: true }));
  console.log(comments);
    res.render('comments', {
      blog,
      comments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
