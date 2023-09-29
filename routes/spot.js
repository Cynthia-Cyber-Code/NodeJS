const express = require('express');
const router = express.Router();
const { Spot } = require("../db")

/* GET spots */
router.get('/', (req, res, next) => {
    Spot.findAll().then(rooms => {
        res.status(200).json(rooms);
    });
});

/*POST  spot */
router.post('/', (req, res, next) => {

    Spot.create({

    }).then(spot => { 
        console.log(spot);
        res.status(200).json({message: "Room enregistrée"});
    });
});

//Put
router.put('/:spotId', (req, res, next) => {
    Spot.update({
        
    },{ 
        where: { id: req.params.spotId }
    }
    ).then(spot => { 
        console.log(spot);
        res.status(200).json({message: "Spot enregistrée"});
    });
});

//Delete
router.delete('/:spotId', (req, res, next) => {

    Spot.destroy({ 
        where: { id: req.params.spotId }
    }
    ).then(spot => {
        console.log(spot);
        res.status(200).json({message: "Room delete"});
    });
});

module.exports = router;
