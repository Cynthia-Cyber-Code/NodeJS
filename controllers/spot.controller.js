const express = require('express');
const router = express.Router();
const { Spot } = require("../db")

/* GET spots */
exports.allSpots = (req, res, next) => {
    Spot.findAll().then(rooms => {
        res.status(200).json(rooms);
    }).catch(error => { 
        console.error(error);
        res.status(500).json({message: "Impossibilité de récupérer la demande"});
    })
};

exports.getSpot = (req, res, next) => {
    Spot.findOne({
        where: { id: req.body.spotId }
    }).then(spot => { 
        console.log(spot);
        res.status(200).json({message: spot});
    }).catch(error => { 
        console.error(error);
        res.status(403).json({message: "Veuillez renseigner correctement le numéro du spot demandée"});
    })
}

/*POST  spot */
exports.postSpot = (req, res, next) => {
    Spot.create({
    }).then(spot => { 
        console.log(spot);
        res.status(200).json({message: "Spot enregistrée"});
    }).catch(error => { 
        console.error();
        res.status(500).json({message: "Impossibilité de créer un spot"});
    })
};

//Put
exports.putSpot = (req, res, next) => {
    Spot.update({
    },{ 
        where: { id: req.body.spotId }
    }
    ).then(spot => { 
        console.log(spot);
        res.status(200).json({message: "Spot enregistrée"});
    }).catch(error => { 
        console.error();
        res.status(500).json({message: "Impossibilité de modifier ce spot"});
    })
};

//Delete
exports.deleteSpot = (req, res, next) => {

    Spot.destroy({ 
        where: { id: req.body.spotId }
    }
    ).then(spot => {
        console.log(spot);
        res.status(200).json({message: "Room delete"});
    }).catch(error => { 
        console.error();
        res.status(500).json({message: "Impossibilité de supprimer ce spot"});
    })
};