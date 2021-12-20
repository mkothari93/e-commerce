// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Product belongs to Category
Product.belongsTo(Category, {
  foreignKey: ''
})

//Category has many Products
Category.hasMany(Product, {
  foreignKey: ''
})

//Product belong to many Tags (through ProductTag) Using the ProductTag through model, allow products to have multiple tags and tags to have many products.
Product.belongsToMany(Tag, {
  foreignKey:''
})

//Tag belong to many Products (through ProductTag)
Tag.belongsToMany(Product, {
  foreignKey: ''
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
