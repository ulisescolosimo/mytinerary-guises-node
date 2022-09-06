const mongoose = require('mongoose')

require('dotenv').config();

const db = require('./config/database')

const City = require('./models/City')

const User = require('./models/User')

const Itinerary = require('./models/Itinerary')


Itinerary.create({
    name: "" ,
      user: "",
      city: "",
      price: "",
      likes: "",
      tags: "",
      duration:"" 
})