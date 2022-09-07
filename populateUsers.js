const mongoose = require('mongoose')

require('dotenv').config();

const db = require('./config/database')

const User = require('./models/User')

User.create({
    name: "Ulises",
    lastName: "Colosimo",
    mail: "colosimo@gmail.com",
    password: "hola123",
    photo: "img-url333",
    country: "Argentina",
},
{
    name: "Guido",
    lastName: "Seia",
    mail: "guido@gmail.com",
    password: "argentian2022",
    photo: "img-url241231",
    country: "Argentina",
},
{
    name: "Roberto",
    lastName: "Carlos",
    mail: "brasil3@gmail.com",
    password: "brasilcampeon",
    photo: "img-url241231",
    country: "Brasil",
})