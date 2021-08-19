const { Router } = require('express');
const axios = require('axios');
const { Reservation } = require('../db.js');
const Sequelize = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const router = Router();


router.post('/', async (req, res, next) => {
    const { customerName, tableNumber, date } = req.body;
    const { restaurantId } = req.query;
    let resId = uuidv4();

    const newObj = {
        customerName, 
        tableNumber, 
        date,
        id: resId
    }

    try {
        const newReservation = await Reservation.create(newObj)
        newReservation.setRestaurants(restaurantId);
        res.json(newReservation).status(200);
    }
    catch (err) {
        next(err);
        res.sendStatus(504);
    }
})

module.exports = router; 