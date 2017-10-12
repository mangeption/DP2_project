const mongoose = require('mongoose');
const Products = require('./products.js');

const SaleSchema = mongoose.Schema({
    id:{
        type: Number,
        require: true
    },
    prodId:{
        type: Number,
        require: true,
        ref: 'Products'
    },
    date:{
        type: Date,
        require: true
    },
    qty:{
        type: Number,
        require: true
    },
});

const Sale = module.exports = mongoose.model('Sales', SaleSchema);