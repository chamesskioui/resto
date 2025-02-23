const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: String,
    category : String,
    price: Number,
    description: String,
   image: [String]
},{timestamps: true});
module.exports = mongoose.model('Product', productSchema);