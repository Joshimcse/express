/**
 * Tshirt
 *
 * @module      :: Routes
 * @description :: Maps routes and actions
 * @author	    :: Joshim Uddin
 */

const Tshirt = require('../models/tshirt.js');

module.exports = (app) => {

    /**
     * Find and retrieves all tshirts
     * @param {Object} req HTTP request object
     * @param {Object} res HTTP response object
     */
    findAllTshirt = (req, res) => {
        console.log('GET - /tshirt');

        return Tshirt.find((err, tshirt) => {
            if (!err) res.send(tshirt);
            else {
                res.statusCode = 500;
                console.log('Internal error (%d) : %s', res.statusCode, err.message);
                return res.send({
                    error: 'Server Error'
                });
            }
        });
    }


    /**
     * Creates a new tshirt from the data request
     * @param {Object} req HTTP request object.
     * @param {Object} res HTTP response object.
     */
    addTshirt = (req, res) => {
        console.log('POST - /tshirt');
        const tshirt = new Tshirt({
            model: req.body.model,
            style: req.body.style,
            size: req.body.size,
            colour: req.body.colour,
            price: req.body.price
        });

        tshirt.save((err) => {
            if (err) {
                console.log('Error while saving tshirt: ' + err);
                res.send({
                    error: err
                });
                return;
            } else {
                console.log('Tshirt created');
                return res.send({
                    status: 'OK',
                    tshirt: tshirt
                });
            }
        });
    }

    app.get('/tshirt', findAllTshirt);
    app.post('/tshirt', addTshirt);
}