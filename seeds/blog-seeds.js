const { Blog } = require('../models');

const blogData = [
  {
    blog_name: 'Yoga',
  },
  {
    blog_name: 'Shorts',
  },
  {
    blog_name: 'Music',
  },
  {
    blog_name: 'Hats',
  },
  {
    blog_name: 'Shoes',
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
