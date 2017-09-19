const express = require('express');
const router = express.Router();

const Products = require('../models/products.js');

router.get('/products', function(req, res, next){
    Products.find(function(err, prods){
        res.json(prods)
    });
});

router.post('/products', function(req, res, next){
    let newProduct = new Products({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
    });
    newProduct.save(function(err, prod){
        if(err){
            res.json({msg: 'Failed to add product'});
        }else{
            res.json({msg: 'Product added successfully'})
        }
    });
});

router.delete('/products', function(req, res, next){
    res.send('Retrive products');
});

module.exports = router;