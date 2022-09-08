const mongoose = require('mongoose')

require('dotenv').config();

const db = require('./config/database')

const User = require('./models/User')

User.create({
    name: "Ulises",
    lastName: "Colosimo",
    mail: "colosimo@gmail.com",
    password: "hola123",
    photo: "https://randomuser.me/api/portraits/men/21.jpg",
    country: "Argentina",
},
{
    name: "Guido",
    lastName: "Seia",
    mail: "guido@gmail.com",
    password: "argentian2022",
    photo: "https://randomuser.me/api/portraits/men/47.jpg",
    country: "Argentina",
},
{
    name: "Roberto",
    lastName: "Carlos",
    mail: "brasil3@gmail.com",
    password: "brasilcampeon",
    photo: "https://randomuser.me/api/portraits/men/83.jpg",
    country: "Brasil",
})