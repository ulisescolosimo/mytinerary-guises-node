const mongoose = require('mongoose')

const CitySchema = new mongoose.Schema({
      city: {type: String, required: true},
      country: {type: String, required: true},
      photo: {type: String, required: true},
      population: {type: Number, required: true, min: 1000,
      max: 100000000},
      foundation: {type: Date, required: true, max: 4},
      description: {type: String}
})

const City = mongoose.model(
      'City',
      CitySchema
)     

module.exports = City