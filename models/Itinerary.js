const mongoose = require('mongoose')

const ItinerarySchema = new mongoose.Schema({
      name: {type: String, required: true, min: 3, max:35,},
      user: {type: mongoose.Types.ObjectId, ref: 'users',},
      city: {type: mongoose.Types.ObjectId, ref:'cities', min: 3,},
      price: {type: Number, required: true, min: 1,},
      likes: {type: Array, required: true},
      tags: {type: Array, required: true},
      duration: {type: Number, required: true, min:1,},
})

const Itinerary = mongoose.model(
      'itineraries',
      ItinerarySchema
)     

module.exports = Itinerary