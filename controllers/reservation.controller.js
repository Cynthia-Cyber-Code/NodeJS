const express = require('express');
const router = express.Router();
const { Reservation } = require("../db")

/* GET reservation*/
exports.allReservations = (req, res, next) => {
    Reservation.findAll().then(Reservations => {
        // Send all reservations to Client
        res.status(200).json(Reservations);
    });
};

// exports.allReservationsUser = (req, res, next) => {
//     Reservation.findAll({
//         where: { id: req.auth.user_id }
//     }
//     ).then(reservation => {
//         console.log(reservation);
//         res.status(200).json({message: "Reservation delete"});
//     });
// };

//Post
exports.addReservation = (req, res, next) => {

    const reservation_date = req.body.reservation_date; 
    const number_of_customers = req.body.number_of_customers;
    const reservation_name = req.body.reservation_name;
    const id_spot = req.body.id_spot;
    const id_room = req.body.id_room;
    const reservation_note = req.body.reservation_note;
    const reservation_status = 1;

    Reservation.create({
        number_of_customers: number_of_customers,
        reservation_date: reservation_date,
        reservation_name: reservation_name,
        id_spot: id_spot,
        reservation_note: reservation_note,
        reservation_status: reservation_status
    }).then(reservation => { 
        if(typeof reservation_date !== "string") {
            return res.status(422).json({error: "La date n'est n'est pas bon(on attend un format date)"})
        }
        if(typeof number_of_customers !== 'number'|| !Number.isInteger(number_of_customers)) {
            return res.status(422).json({error: "Le nombre de convive n'est pas bon(Un nombre entier est attendu)"})
        }
        if(typeof reservation_name !== "string") {
            return res.status(422).json({error: "Le nom de la réservation n'est pas bon(Un nom est attendu)"})
        }
        if(typeof reservation_status !== "number" || !Number.isInteger(reservation_status)) {
            return res.status(422).json({error: "Le status est incorrecte"})
        }
        console.log(reservation);
        res.status(200).json({message: "Reservation enregistrée"});
    }).catch(error => {
        console.error(error);
        return res.status(422).json({message: "Error"});
    });
};

//Put
exports.changeReservation = (req, res, next) => {

    const id = req.body.reservationId;
    const reservation_date = req.body.reservation_date; 
    const number_of_customers = req.body.number_of_customers;
    const reservation_name = req.body.reservation_name;
    const id_spot = req.body.id_spot;
    const id_room = req.body.id_room;
    const reservation_note = req.body.reservation_note;
    const reservation_status = 1;

    Reservation.update({
        number_of_customers: number_of_customers,
        reservation_date: reservation_date,
        reservation_name: reservation_name,
        id_spot: id_spot,
        reservation_note: reservation_note,
        reservation_status: reservation_status
    },{ where: { id: id }}
    ).then(reservation => {
        if(typeof reservation_date !== "string") {
            return res.status(422).json({error: "La date n'est n'est pas bon(on attend un format date)"})
        }
        if(typeof number_of_customers !== 'number'|| !Number.isInteger(number_of_customers)) {
            return res.status(422).json({error: "Le nombre de convive n'est pas bon(Un nombre entier est attendu)"})
        }
        if(typeof reservation_name !== "string") {
            return res.status(422).json({error: "Le nom de la réservation n'est pas bon(Un nom est attendu)"})
        }
        if(typeof reservation_status !== "number" || !Number.isInteger(reservation_status)) {
            return res.status(422).json({error: "Le status est incorrecte"})
        }
        console.log(reservation);
        res.status(200).json({message: "Reservation modifiée"});
    });
};

//Delete
exports.deleteReservation = (req, res, next) => {
    Reservation.destroy({
        where: { id: req.body.reservationId }
    }
    ).then(reservation => {
        console.log(reservation);
        res.status(200).json({message: "Reservation delete"});
    }).catch(error => {
        console.error(error)
        res.status(404).json({message: "Not found"});
    })
};
