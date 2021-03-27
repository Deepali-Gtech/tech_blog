// import models
//const Blogwriter = require('./Product');
const Blog = require('./Blog');
const User = require('./User');


// // Blog belongsTo Blogwriter
// Blog.belongsTo(Blogwriter, {
//   foreignKey: 'blog_id'
// });

// // Categories have many Products
// Blog.hasMany(Blogwriter, {
//   foreignKey: 'blog_id',
// });

// // Products belongToMany Tags (through ProductTag)
// Product.belongsToMany(Tag, {
//   through: ProductTag,
//   foreignKey: 'product_id'
// });

// // Tags belongToMany Products (through ProductTag)
// Tag.belongsToMany(Product, {
//   through: ProductTag,
//   foreignKey: 'tag_id'
// });
module.exports = {
  Blog, User
};
