const express = require('express');
const router = express.Router();
const Weight = require('../models/Weight');

// Get all the weights
router.get('/', async (req, res)=>{
    try{
        const weights = await Weight.find();
        res.json(weights);
        res.send('We are on weight');
    }catch(err){
        res.json({message: err});
    }
    
});

// Add a weight
router.post('/addWeight',(req, res)=>{
    console.log(req.body);
    const weight = new Weight({
        userId: req.body.userId,
        weight: req.body.weight,
        date: req.body.date,
    });
    weight.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json({message: err});
    });
});

// Get a specific weight
router.get('/:id', async (req, res)=>{
    try{
        const weight = await Weight.findById(req.params.id);
        res.json(weight);
    }catch(err){
        res.json({message: err});
    }
    
});

module.exports = router;