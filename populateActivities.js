const mongoose = require('mongoose')

require('dotenv').config();

const db = require('./config/database')

const Activity = require('./models/Activity')

Activity.create(
    {
    name: "Subir las escaleras o usar el ascensor",
    photo: "foto torre eiffel",
    itinerary: "6317ffd249de7a36b50939ea"
    },{
    name: "Recorrer el central park en bicicleta",
    photo: "Bicicleta en el parque",
    itinerary: "6317ffd249de7a36b50939e5"
    },
    {
    name: "Sacar una foto turistica en los calabozos del Coliseo",
    photo: "Foto en el calabozo",
    itinerary: "6317ffd249de7a36b50939ef"
    }
)