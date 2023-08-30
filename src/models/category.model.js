const mongoose = require('mongoose');
const category_schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Truong nay bat buoc phai nhap'],
        unique: true,
    },
    description: String,
    products: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});
module.exports = mongoose.model('Category', category_schema);