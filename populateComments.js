const mongoose = require('mongoose')

require('dotenv').config();

const db = require('./config/database')

const Comment = require('./models/Comment')

Comment.create({
    comment: "Good pic in Tower Eiffel!",
    user: "631666c92b5cef7ed8a58bcd",
    itinerary: "6317ffd249de7a36b50939ea"
},{
    comment: "Aguante Argentina!",
    user: "631661f9a2e5e80a7e6185ed",
    itinerary: "6317ffd249de7a36b50939f4"
},{
    comment: "Bad! Always in construction!",
    user: "6316675e8db7bffd0259cc9f",
    itinerary: "6317ffd249de7a36b50939ed"
}
)