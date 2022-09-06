const mongoose = require('mongoose')

const ItinerarySchema = new mongoose.Schema({
      name: {type: String, required: true},
      user: {type: String, required: true},
      city: {type: mongoose.Types.ObjectId, ref:'cities'},
      price: {type: Number, required: true,},
      likes: {type: Array, required: true},
      tags: {type: Array, required: true},
      duration: {type: Number, required: true,},
})

const Itinerary = mongoose.model(
      'itineraries',
      ItinerarySchema
)     

module.exports = Itinerary