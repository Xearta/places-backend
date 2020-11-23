const express = require('express');

const placesControllers = require('../controllers/places-controller');

const router = express.Router();

// Find a specific place by ID
router.get('/:pid', placesControllers.getPlaceById);

// Find a place by the id of the creator
router.get('/user/:uid', placesControllers.getPlaceByByUserId);

module.exports = router;
