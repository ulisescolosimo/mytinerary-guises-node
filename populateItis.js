const mongoose = require('mongoose')

require('dotenv').config();

const db = require('./config/database')

const Itinerary = require('./models/Itinerary')


Itinerary.create(
    {
    name: "Central Park" ,
    user: "632102183c77bd1a8e43794b",
    city: "6323e2f6e757fdcf61522849",
    price: 5,
    likes: [35],
    tags: ["#Nature", "#CentralPark", "#Walk"],
    duration: 400
    },{
    name: "Times Square",
    user: "632102183c77bd1a8e43794b",
    city: "6323e2f6e757fdcf61522849",
    price: 2,
    likes: [5],
    tags: ["#City", "#NYC", "#Photography"],
    duration: 120
    },{
    name: "Statue of Liberty" ,
    user: "632102183c77bd1a8e43794b",
    city: "6323e2f6e757fdcf61522849",
    price: 10,
    likes: [2105],
    tags: ["#libertyisland", "#statuephotography", "#queens"],
    duration: 50
    },{
    name: "Louvre Museum",
    user: "632102183c77bd1a8e43794b",
    city: "6323e2f6e757fdcf6152284a",
    price: 5,
    likes: [6],
    tags: ["#museum", "#louvre"],
    duration: 90
    },{
    name: "Notre Dame" ,
    user: "632102183c77bd1a8e43794b",
    city: "6323e2f6e757fdcf6152284a",
    price: 40,
    likes: [52],
    tags: ["#paris", "#instadame", "#cathedrale"],
    duration: 120
    },{
    name: "Eiffel Tower" ,
    user: "631f8af4b0ed52fc7f717b04",
    city: "6323e2f6e757fdcf6152284a",
    price: 60,
    likes: [23],
    tags: ["#paris", "#tower", "#parisjetaime"],
    duration: 60
    },{
    name: "Buckingham Palace",
    user: "631f8af4b0ed52fc7f717b04",
    city: "6323e2f6e757fdcf61522848",
    price: 18,
    likes: [1685],
    tags: ["#britishroyalfamily", "#queenelizabeth", "#duchessofcambridge"],
    duration: 60
    },{
    name: "Big Ben" ,
    user: "631f8af4b0ed52fc7f717b04",
    city: "6323e2f6e757fdcf61522848",
    price: 10,
    likes: [4685],
    tags: ["#bigben" ,  "#visitlondon", "#steelcity"],
    duration: 90
    },{
    name: "Tower Bridge" ,
    user: "631f8af4b0ed52fc7f717b04",
    city: "6323e2f6e757fdcf61522848",
    price: 3,
    likes: [2425],
    tags: ["#bridge" ,  "#tower", "#london"],
    duration: 60,
    },{
    name: "The Jewish Ghetto" ,
    user: "631f8af4b0ed52fc7f717b04",
    city: "6323e2f6e757fdcf61522847",
    price: 20,
    likes: [50],
    tags: ["#rome", "#italy", "#jewish"],
    duration: 60
    },{
    name: "Colosseum" ,
    user: "631f8af4b0ed52fc7f717b04",
    city: "6323e2f6e757fdcf61522847",
    price: 40,
    likes: [1200],
    tags: ["#rome", "#forum" , "#colosseum"],
    duration: 120
    },{
    name: "Main Square" ,
    user: "631f8b37b0ed52fc7f717b0a",
    city: "6323e2f6e757fdcf6152284b",
    price: 3,
    likes: [485],
    tags: ["#square",  "#madrid", "#spain"],
    duration: 200
    },{
    name: "Gran Via Street" ,
    user: "631f8b37b0ed52fc7f717b0a",
    city: "6323e2f6e757fdcf6152284b",
    price: 6,
    likes: [85],
    tags: ["#street",  "#madrid", "#granvia"],
    duration: 300
    },{
    name: "The Acropolis",
    user: "631f8b37b0ed52fc7f717b0a",
    city: "6323e2f6e757fdcf6152284e",
    price: 70,
    likes: [20],
    tags: ["#athens", "#greek", "#archaeological"],
    duration: 240
    },{
    name: "Parthenon" ,
    user: "631f8b37b0ed52fc7f717b0a",
    city: "6323e2f6e757fdcf6152284e",
    price: 60,
    likes: [500],
    tags: ["#athens", "#greek", "#majestic", "#ruins"],
    duration: 120
    },{
    name: "Pink House" ,
    user: "631f8b37b0ed52fc7f717b0a",
    city: "6323e2f6e757fdcf6152284f",
    price: 12,
    likes: [685],
    tags: ["#pink",  "#capital", "#government"],
    duration: 400
    },{
    name: "Hermitage museum" ,
    user: "631f8b37b0ed52fc7f717b0a",
    city: "6323e2f6e757fdcf6152284d",
    price: 9,
    likes: [4532],
    tags: ["#museum",  "#culture", "#art"],
    duration: 70
    },{
    name: "Anne Frank House" ,
    user: "632102183c77bd1a8e43794b",
    city: "6323e2f6e757fdcf61522845",
    price: "20",
    likes: [40],
    tags: ["diary", "annefrank", "#IIWW", "#holand"],
    duration: 60
    }
  )
  