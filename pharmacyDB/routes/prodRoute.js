const express = require('express');
const router = express.Router();



const Products = require('../models/products.js');



//Get all products
router.get('/products', function(req, res, next){
    Products.find(function(err, prods){
        res.json(prods)
    });
});
//Get a product by id
router.get('/products/:id', function(req,res,next){
    Products.findOne({_id: req.params.id}, function(err, foundProduct){
        if (err)
            res.json(err);
        else
            res.json(foundProduct);
    });
});
//Add new product
router.post('/addProduct', function(req, res, next){
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
//Edit existed product by id
router.put('/editProduct/:id', function(req, res, next){
    let updatedProduct = new Products({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock
    });
    Products.findOne({_id: req.params.id}, function(err, foundObject){
        if(err){
            res.json(err);
        }else{
            if(foundObject){
                if(updatedProduct.name){
                    foundObject.name = req.body.name;
                }
                if(updatedProduct.price){
                    foundObject.price = req.body.price;
                }
                if(updatedProduct.stock){
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
// Delete product by id
router.delete('/delProduct/:id', function(req, res, next){
    Products.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });

    
});

// check low stock
router.get('/lowStocks', function(req, res, next){
    Products.find({stock : {$lt:30}}, function(err, lowStock) {
        res.json(lowStock)
    });
});

module.exports = router;