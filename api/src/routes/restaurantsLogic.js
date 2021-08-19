const { Router } = require('express');
const { Restaurant, Reservation } = require('../db.js');
const Sequelize = require('sequelize');
const router = Router();

//Create Restaurant
router.post('/', async (req, res, next) => {
    const { name, description, restaurantPhoto, city, address} = req.body;

    const newObj = {
        name,
        description,
        restaurantPhoto,
        city,
        address,
    }

    try {
        const newRestaurant = await Restaurant.create(newObj)
        res.json(newRestaurant).status(200);
    }
    catch (err) {
        next(err);
        res.sendStatus(504);
    }
})

//Modify Restaurant
router.put('/:idRestaurant', async (req, res, next) => {
    try {
        const { idRestaurant } = req.params;
        let modifications = req.body;


        let foundRestaurant = await Restaurant.update(modifications, {
            where: {
                id: idRestaurant
            }
        });

        foundRestaurant === null
        ? res.send('Restaurant Not Found').status(404)
        : res.json(foundRestaurant);
    }
    catch{
        next(err).status(504)
    }
})

//Get Single Restaurant
router.get('/:idRestaurant', async (req, res, next) => {
    try {
        const { idRestaurant } = req.params;


        let foundRestaurant = await Restaurant.findOne({
            where: {
                id: idRestaurant
            },
            include: [{
                model: Reservation
            }]
        });
        foundRestaurant === null
        ? res.send('Restaurant Not Found').status(404)
        : res.json(foundRestaurant);
    }
    catch{
        next(err).status(504)
    }
})

//Delete Restaurant
router.delete('/:idRestaurant', async (req, res, next) => {
    const { idRestaurant } = req.params;
    
    try {
        let existsInDB = await Restaurant.findByPk(idRestaurant); // primero busca si existe el post en la DB. Si existe lo guarda en esta variable
        if (existsInDB) {
        await Restaurant.destroy({
            // de existir, lo destruye
            where: {
                id: idRestaurant,
            },
        });
            return res.json(existsInDB); // devuelve el post eliminado como el metodo pop()
        } else {
            throw new Error(
                "ERROR 404: La publicación no fue encontrada en la base de datos (UUID no existe)."
            );
        };
    }
    catch{
        next(err).status(504)
    }
})

//Query Restaurant
router.use('/', async (req, res, next) => {
    let ctDb = null;

    try {
        if (req.query.name) {
            console.log('QUERY')
            const { name, order } = req.query;


            const queryResult = await Restaurant.findAll({
                where: {
                    name: {
                        [Sequelize.Op.iLike]: `%${name}%`
                    }
                }
            });


            if (queryResult.length > 0) {
                return res.json(queryResult)
            } else {
                return res.json('Restaurant not found, try again.').status(404);
            }
        } else {
            const { order } = req.query;
            if(order === 'ASC' || !order){
                ctDb = await Restaurant.findAll({
                    include: [{
                        model: Reservation,
                    }],
                    order: [['name','ASC']]
                });
                console.log('QUERY', order)
            }

            try {
                console.log('CT-DB is Live!')
                return res.json(ctDb);
            }
            catch (err) {
                next(err);
                res.status(404);
            }
        }
    } catch (err) {
        next(err);
        res.status(504);
    }
});

module.exports = router; 