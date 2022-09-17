const mongoose = require('mongoose')

require('dotenv').config();

const db = require('./config/database')

const User = require('./models/User')

User.create({
    name: "Ulises",
    email: "colosimo@gmail.com",
    pass: "hola123",
    photo: "https://randomuser.me/api/portraits/men/21.jpg",
    country: "Argentina",
    from: 'form',
    role: 'user',
    logged: false,
    verified: false
},
{
    name: "Guido",
    email: "guido@gmail.com",
    pass: "argentian2022",
    photo: "https://randomuser.me/api/portraits/men/47.jpg",
    country: "Argentina",
    from: 'form',
    role: 'user',
},
{
    name: "Roberto",
    email: "brasil3@gmail.com",
    pass: "brasilcampeon",
    photo: "https://randomuser.me/api/portraits/men/83.jpg",
    country: "Brasil",
    from: 'form',
    role: 'user',
})