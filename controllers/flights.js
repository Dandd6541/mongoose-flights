const Flight = require('../models/flight');

module.exports = {
  index,
  new: newFlight,
  show
};

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { flights });
  });
}

function newFlight(req, res) {
    res.render('flights/new');
}
function show(req, res) {
  flight.findById(req.params.id, function(err, flight){
    res.render('flights/', {title: 'Flight Detail', flight});

  });
}