const router = require("express").Router();

const { Blog, User } = require('../models');
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

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
