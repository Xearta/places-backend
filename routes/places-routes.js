const express = require('express');

const placesController = require('../controllers/places-controller');

const router = express.Router();

// Find a specific place by ID
router.get('/:pid', placesController.getPlaceById);

// Find a place by the id of the creator
router.get('/user/:uid', placesController.getPlaceByByUserId);

router.post('/', placesController.createPlace);

module.exports = router;
