const mongoose = require('mongoose')

const CitySchema = new mongoose.Schema({
      city: {type: String, required: true},
      country: {type: String, required: true},
      photo: {type: String, required: true},
      population: {type: Number, required: true, min: 1000,
      max: 100000000},
      foundation: {type: Date, required: true},
      description: {type: String}
})

const City = mongoose.model(
      'cities',
      CitySchema
)     

module.exports = City