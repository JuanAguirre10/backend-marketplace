const Category = require('./Category');
const Product = require('./Product');

Category.hasMany(Product, { foreignKey: 'CategoryId' });
Product.belongsTo(Category, { foreignKey: 'CategoryId' });

module.exports = { Category, Product };