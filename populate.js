const mongoose = require('mongoose')

require('dotenv').config();

const db = require('./config/database')

const City = require('./models/City')

const User = require('./models/User')

/* City.create({
    city: "La matanza",
    country: "Arg",
    photo: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    population: 2161000,
    foundation: 1951-10-04,
    description: "Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city."
}) */

User.create(
    {
        "name": "Roberto",
        "lastName": "Carlos",
        "mail": "brasil3@gmail.com",
        "password": "brasilcampeon",
        "photo": "img-url241231",
        "country": "Brasil",
    }
)

/* City.create({
    city: "Paris",
    country: "France",
    photo: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    population: 2161000,
    foundation: 1951-10-04,
    description: "Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city."
},{
    city: "London",
    country: "United Kingdom",
    photo: "https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9uZG9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    population: 8982000,
    foundation: 1947-07-04,
    description: "London is famous for Big Ben, Buckingham Palace, British Museum, and Tower Bridge. London is also known for its rich history, double-decker buses, red phone booths, world-class museums and galleries, gigantic lush parks, financial districts, and cosmopolitan vibes."
},{
    city: "Amsterdam",
    country: "Netherlands",
    photo: "https://images.unsplash.com/photo-1576924542622-772281b13aa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFtc3RlcmRhbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    population: 821752,
    foundation: 1275-10-27,
    description: "Amsterdam is one of the greatest small cities in the world. From Amsterdam canals to world-famous Amsterdam museums and historical Amsterdam sights, it is one of the most romantic and beautiful cities in Europe. Canal cruises are a popular way to see the city from the perspective of its canals."
},{
    city: "Prague",
    country: "Czech Republic",
    photo: "https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJhZ3VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    population: 1309000,
    foundation: 1485-04-27,
    description: "The city of Prague has a rich architectural heritage that reflects both the uncertain currents of history in Bohemia and an urban life extending back more than 1,000 years. The physical attractions and landmarks of Prague are many. Among the finest is the Charles Bridge (Karlův most), which stands astride the Vltava River."
},{
    city: "New York",
    country: "United States",
    photo: "https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGltZXMlMjBzcXVhcmV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    population: 8380000,
    foundation: 1642-14-05,
    description: "New York City is called the City of Dreams for a reason. This city is perfect for college graduates, as the city's businesses offer world-class internships in all the major industries. The city also offers unparalleled access to the arts community for those who wish to pursue life-long dreams as artists."
},{
    city: "Rome",
    country: "Italy",
    photo: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    population: 2873000,
    foundation: 500-11-08,
    description: "Rome is often referred to as the City of Seven Hills due to its geographic location, and also as the Eternal City. Rome is generally considered to be the cradle of Western civilization and Christian culture, and the centre of the Catholic Church."
},{
    city: "Buenos Aires",
    country: "Argentina",
    photo: "https://images.unsplash.com/photo-1586354822120-bf910e563cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVlbm9zJTIwYWlyZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    population: 17541141,
    foundation: 1922-04-17,
    description: "Buenos Aires is the capital and largest city of Argentina. It is located on the western shore of the estuary of the Río de la Plata, on the southeastern coast of the South American continent. Much of the city’s architecture is characterized by its eclectic nature, with elements resembling Barcelona, Paris and Madrid, even Italian and French influences."
},{
    city: "Istanbul",
    country: "Turkey",
    photo: "https://images.unsplash.com/photo-1623613229313-5e59f698526f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXN0YW5idWx8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    population: 15460000,
    foundation: 1229-12-31,
    description: "Istanbul, a fascinating city built on two Continents, divided by the Bosphorus Strait. This is one of the greatest cities in the world where you can see a modern western city combined with a traditional eastern city, it's a melting pot of many civilizations and different people."
},{
    city: "Athens",
    country: "Greece",
    photo: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXRoZW5zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    population: 3167000,
    foundation: 1565-03-01,
    description: "Athens is known to be the birthplace of democracy and the idea that all citizens should have a voice in governing their society. Athens also houses many historic landmarks, such as temples and theatres, which were made by ancient architects during the Classical period."
},{
    city: "Tokyo",
    country: "Japan",
    photo: "https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dG9reW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    population: 13960000,
    foundation: 1449-12-31,
    description: "Tokyo is the administrative, cultural, financial, commercial, and educational centre of Japan and the focus of an extensive urban complex that includes Kawasaki and Yokohama. Attractions include the Imperial Palace, encircled by stone-walled moats and broad gardens, and numerous temples and shrines."
},{
    city: "Saint Petersburg",
    country: "Russia",
    photo: "https://images.unsplash.com/photo-1579677359441-a59fa83ecc40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FpbnQlMjBwZXRlcnNidXJnfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    population: 4991000,
    foundation: 1868-10-10,
    description: "St Petersburg is home to Russia's best preserved and most elaborate constructions from the extravagant Tsarist era. Brimming with baroque palaces, classical sculptures, royal gardens, and grandiose cathedrals, you can not simply miss to visit St Petersburg in your lifetime."
},{
    city: "Madrid",
    country: "Spain",
    photo: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFkcmlkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    population: 3223000,
    foundation: 1820-03-01,
    description: "It is a modern metropolitan city and an economical and industrial center of Spain, and, with its population of nearly 3,5 million people, is also the biggest city in Spain. It is located in the centre of the Iberian Peninsula, and is surrounded by mountains and natural parks."
})

 */