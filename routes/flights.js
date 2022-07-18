var express = require('express');
var router = express.Router();
const flightCtrl = require('../controllers/flights');
// const { routes } = require('../server');

/* GET users listing. */
router.get('/', flightCtrl.index);
router.get('/new', flightCtrl.new);
router.get('/:id', flightCtrl.show);


module.exports = router;
