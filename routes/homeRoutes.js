const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  try {
    const response = await fetch('http://localhost:3001/api/blog');
    const blogs = await response.json();
    res.render('homepage', {
      blogs
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
