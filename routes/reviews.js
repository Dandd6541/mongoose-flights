const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// The starts with path is '/'

// POST /movies/:id/reviews
router.post('/flights/:id/reviews', reviewsCtrl.create);

module.exports = router;