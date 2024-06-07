const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  supplier: String,
  sales: Number,
  price: Number,
  quantity: Number
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;