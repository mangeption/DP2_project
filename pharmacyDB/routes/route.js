const express = require('express');
const router = express.Router();

const Products = require('../models/products.js');

router.get('/products', function(req, res, next){
    Products.find(function(err, prods){
        res.json(prods)
    });
});

router.post('/product', function(req, res, next){
    let newProduct = new Products({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock
    });
    newProduct.save(function(err, prod){
        if(err){
            res.json({msg: 'Failed to add product'});
        }else{
            res.json({msg: 'Product added successfully'})
        }
    });
});

router.put('/editProduct/:id', function(req, res, next){
    Products.findOne({id: req.params.id}, function(err, foundObject){
        if(err){
            res.json(err);
        }else{
            if(foundObject){
                if(req.body.name){
                    foundObject.name = req.body.name;
                }
                if(req.body.price){
                    foundObject.price = req.body.price;
                }
                if(req.body.stock){
                    foundObject.stock = req.body.stock;
                }
                foundObject.save(function(err, updatedObject){
                    if(updatedObject){
                        res.json({msg: 'Product editted successfully'})
                    }else{
                        res.json({msg: 'Fail to edit document'})
                    }
                });
            }
        }
    });
});

router.delete('/product/:id', function(req, res, next){
    Products.remove({id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });

    
});

module.exports = router;