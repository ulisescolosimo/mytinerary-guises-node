const mongoose = require('mongoose')

const CitySchema = new mongoose.Schema({
      city: {type: String, required: true,min:3},
      country: {type: String, required: true, min:3},
      photo: {type: String, required: true, validate: function (value){
             if (!value.endsWith('jpg') || !value.endsWith('png') && !value.startsWith('http')) {
               throw new Error('The url must start with "http"')   
            }}},
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