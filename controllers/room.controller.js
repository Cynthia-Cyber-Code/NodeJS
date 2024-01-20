const express = require('express');
const router = express.Router();
const { Room } = require("../db")

/* GET rooms */
exports.allRooms = (req, res, next) => {
    Room.findAll().then(rooms => {
        res.status(200).send(rooms);
    });
};

/* GET room */
exports.room = (req, res, next) => {
    Room.findOne({where : {id: req.body.roomId}}).then(rooms => {
        res.status(200).send(rooms);
    });
};

/*POST  room */
exports.postRoom = (req, res, next) => {

    Room.create({

    }).then(room => { 
        console.log(room);
        res.status(200).json({message: "Room enregistrée"});
    });
};

//Put
exports.putRoom = (req, res, next) => {
    Room.update({
        
    },{ 
        where: { id: req.body.roomId }
    }
    ).then(room => { 
        console.log(room);
        res.status(200).json({message: "Room enregistrée"});
    });
};

//Delete
exports.deleteRoom = (req, res, next) => {

    Room.destroy({ 
        where: { id: req.body.roomId }
    }
    ).then(room => {
        console.log(room);
        res.status(200).json({message: "Room delete"});
    });
};