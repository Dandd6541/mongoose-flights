var express = require('express');
var router = express.Router();
const flightCtrl = require('../controller/flights');
// const { routes } = require('../server');

/* GET users listing. */
router.get('/', flightCtrl.index);

router.get('/new', flightCtrl.new);
module.exports = router;
