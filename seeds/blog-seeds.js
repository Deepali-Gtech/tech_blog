const { Blog } = require('../models');

const blogData = [
  {
    title: 'Yoga',
    content: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing?",
    user_id: 1,
  },
  {
    title: 'Baseball',
    content: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing?",
    user_id: 2,
  },
  {
    title: 'Tennis',
    content: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing?",
    user_id: 1,
  },
  {
    title: 'Food',
    content: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing?",
    user_id: 2,
  },
  {
    title: 'Tech',
    content: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing?",
    user_id: 1,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
