const express = require('express');
const router = express.Router();



const Sales = require('../models/sale.js');



//Get all products
router.get('/sales', function(req, res, next){
    Sales.find(function(err, s){
        res.json(s)
    });
});
//Add new product
router.post('/addSale', function(req, res, next){
    let newSale = new Sales({
        id: req.body.id,
        prodId: req.body.prodId,
        qty: req.body.qty,
        date: req.body.date,
    });
    newSale.save(function(err, sale){
        if(err){
            res.json({msg: 'Failed to add sale'});
        }else{
            res.json({msg: 'Sale added successfully'})
        }
    });
});
//Edit existed product by id
router.put('/editSale/:id', function(req, res, next){
    let updatedSale = new Sales({
        id: req.body.id,
        prodId: req.body.prodId,
        qty: req.body.qty,
        date: req.body.date,
    });
    Sales.findOne({id: req.params.id}, function(err, foundObject){
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
router.delete('/delSale/:id', function(req, res, next){
    Sales.remove({id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });

    
});
module.exports = router;