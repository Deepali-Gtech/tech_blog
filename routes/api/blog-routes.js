const router = require('express').Router();
const { Blog } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const blogData = await Blog.findAll({
      //include: [{ model: Blog }],
    });
    console.log(blogData)
    res.status(200).json(blogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});


module.exports = router;
