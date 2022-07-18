const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
   airport: {
     type: String,
     enum: ['LAX', 'DEN', 'BWI','SAN']
   
   },
   arrival: {
      type: Date
   }
});

const flightSchema = new Schema({
   airline: {
       type: String,
       enum: ['Delta', 'United', 'American', 'Southwest']
   },
   airport: {
       type: String,
       enum: ['LAX', 'DEN', 'BWI', 'SAN', ],
       default: 'LAX'
   },
   flightNo: {
       type: Number,
       required: true,
       min: 10,
       max: 999
   },
   departs: {
       type: Date,
       default: Date.now() + 365*24*60*60000
   },
   destinations: [destinationSchema],
   
});

module.exports = mongoose.model('Flight', flightSchema);