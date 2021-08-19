const { Router } = require('express');
const router = Router();


const restaurantLogic = require('./restaurantsLogic')
const reservationLogic = require('./reservationsLogic')

router.use('/restaurants', restaurantLogic);
router.use('/reservations', reservationLogic);


module.exports = router;  