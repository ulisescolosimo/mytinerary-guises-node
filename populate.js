require('dotenv').config();

const db = require('./config/database')

const City = require('./models/City')

City.create({
    city: "El Cairo",
    country: "Spain",
    photo: "img-2131321",
    population: "5000",
    foundation: "1920-10-10" 
})

