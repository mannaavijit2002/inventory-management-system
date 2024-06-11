const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  supplier: String,
  sales: Number,
  price: Number,
  quantity: Number
});

module.exports = mongoose.model('Product', productSchema);