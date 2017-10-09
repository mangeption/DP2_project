const mongoose = require('mongoose');

const SaleSchema = mongoose.Schema({
    id:{
        type: Number,
        require: true
    },
    ProdId:{
        type: Number,
        require: true
    },
    date:{
        type: Date,
        require: true
    },
    qty:{
        type: Number,
        require: true
    },
    saleprice:{
        type: Number,
        require: true
    }
});

const Product = module.exports = mongoose.model('Products', ProductSchema);