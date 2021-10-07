const express = require('express')
const router  = express.Router();
const Location = require('../models/locations')
 
router.get('/', async (req,res)=>{
    try {
        const newLoc = await Location.find();
        return res.status(200).json(newLoc);
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Server Error'});
    }
});

router.post('/', async (req,res)=>{
    try {
        const newLocation = await Location.create(req.body);

        return res.json({
            success:true,
            data:newLocation
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({error: 'Server Error'});
    }
});

module.exports = router;