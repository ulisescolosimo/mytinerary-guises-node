const mongoose = require('mongoose')

require('dotenv').config();

const db = require('./config/database')

const Itinerary = require('./models/Itinerary')

Itinerary.create(
    {
    name: "Central Park" ,
    user: "6319367fa84e9d66368eed97",
    city: "630fe20c311a12a197e553fb",
    price: 5,
    likes: [35],
    tags: ["#Nature", "#CentralPark", "#Walk"],
    duration: 400
    },{
    name: "Times Square",
    user: "6319367fa84e9d66368eed97",
    city: "630fe20c311a12a197e553fb",
    price: 2,
    likes: [5],
    tags: ["#City", "#NYC", "#Photography"],
    duration: 120
    },{
    name: "Statue of Liberty" ,
    user: "6319367fa84e9d66368eed97",
    city: "630fe20c311a12a197e553fb",
    price: 10,
    likes: [2105],
    tags: ["#libertyisland", "#statuephotography", "#queens"],
    duration: 50
    },{
    name: "Louvre Museum",
    user: "6319367fa84e9d66368eed97",
    city: "630fe20c311a12a197e553f4",
    price: 5,
    likes: [6],
    tags: ["#museum", "#louvre"],
    duration: 90
    },{
    name: "Notre Dame" ,
    user: "6319367fa84e9d66368eed97",
    city: "630fe20c311a12a197e553f4",
    price: 40,
    likes: [52],
    tags: ["#paris", "#instadame", "#cathedrale"],
    duration: 120
    },{
    name: "Eiffel Tower" ,
    user: "6319367fa84e9d66368eed97",
    city: "630fe20c311a12a197e553f4",
    price: 60,
    likes: [23],
    tags: ["#paris", "#tower", "#parisjetaime"],
    duration: 60
    },{
    name: "Buckingham Palace",
    user: "6319367fa84e9d66368eed97",
    city: "630fe20c311a12a197e553f5",
    price: 18,
    likes: [1685],
    tags: ["#britishroyalfamily", "#queenelizabeth", "#duchessofcambridge"],
    duration: 60
    },{
    name: "Big Ben" ,
    user: "6319367fa84e9d66368eed97",
    city: "630fe20c311a12a197e553f5",
    price: 10,
    likes: [4685],
    tags: ["#bigben" ,  "#visitlondon", "#steelcity"],
    duration: 90
    },{
    name: "Tower Bridge" ,
    user: "6319367fa84e9d66368eed95",
    city: "630fe20c311a12a197e553f5",
    price: 3,
    likes: [2425],
    tags: ["#bridge" ,  "#tower", "#london"],
    duration: 60,
    },{
    name: "The Jewish Ghetto" ,
    user: "6319367fa84e9d66368eed95",
    city: "630fe20c311a12a197e553f9",
    price: 20,
    likes: [50],
    tags: ["#rome", "#italy", "#jewish"],
    duration: 60
    },{
    name: "Colosseum" ,
    user: "6319367fa84e9d66368eed95",
    city: "630fe20c311a12a197e553f9",
    price: 40,
    likes: [1200],
    tags: ["#rome", "#forum" , "#colosseum"],
    duration: 120
    },{
    name: "Main Square" ,
    user: "6319367fa84e9d66368eed95",
    city: "630fe20c311a12a197e553ff",
    price: 3,
    likes: [485],
    tags: ["#square",  "#madrid", "#spain"],
    duration: 200
    },{
    name: "Gran Via Street" ,
    user: "6319367fa84e9d66368eed95",
    city: "630fe20c311a12a197e553ff",
    price: 6,
    likes: [85],
    tags: ["#street",  "#madrid", "#granvia"],
    duration: 300
    },{
    name: "The Acropolis",
    user: "6319367fa84e9d66368eed95",
    city: "630fe20c311a12a197e553fc",
    price: 70,
    likes: [20],
    tags: ["#athens", "#greek", "#archaeological"],
    duration: 240
    },{
    name: "Parthenon" ,
    user: "6319367fa84e9d66368eed95",
    city: "630fe20c311a12a197e553fc",
    price: 60,
    likes: [500],
    tags: ["#athens", "#greek", "#majestic", "#ruins"],
    duration: 120
    },{
    name: "Pink House" ,
    user: "6319367fa84e9d66368eed96",
    city: "630fe20c311a12a197e553fa",
    price: 12,
    likes: [685],
    tags: ["#pink",  "#capital", "#government"],
    duration: 400
    },{
    name: "Hermitage museum" ,
    user: "6319367fa84e9d66368eed96",
    city: "630fe20c311a12a197e553fe",
    price: 9,
    likes: [4532],
    tags: ["#museum",  "#culture", "#art"],
    duration: 70
    },{
    name: "Anne Frank House" ,
    user: "6319367fa84e9d66368eed96",
    city: "630fe20c311a12a197e553f6",
    price: "20",
    likes: [40],
    tags: ["diary", "annefrank", "#IIWW", "#holand"],
    duration: 60
    }
  )
  