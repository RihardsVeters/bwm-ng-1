const express = require('express');
const router = express.Router();
const Rental = require('../models/rental')


router.get('', (req, res) => {
  Rental.find({}, function (err, foundRentals) {
    res.status(200).json(foundRentals);
  });
});

router.get('/:id', (req, res) => {
  Rental.findById(req.params.id, (error, foundRental) =>{
    if(error){
        res.status(422).send({errors: [{
            title: 'Rental error',
            detail: 'Could not find rental.'
        }]})
    }
    res.status(200).json(foundRental);
  });
});

module.exports = router;
