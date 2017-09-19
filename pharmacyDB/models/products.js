const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    id:{
        type: Number,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    stock:{
        type: Number,
        require: true
    }
});

const Product = module.exports = mongoose.model('Products', ProductSchema);