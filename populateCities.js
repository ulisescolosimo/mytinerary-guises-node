const mongoose = require('mongoose')

require('dotenv').config();

const db = require('./config/database')

const City = require('./models/City')


City.create({
  city: "Amsterdam",
  country: "Netherlands",
  photo: "https://images.unsplash.com/photo-1576924542622-772281b13aa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFtc3RlcmRhbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
  population: 821752,
  foundation: "1920-04-04T00:00:00.000Z",
  description: "Amsterdam is one of the greatest small cities in the world. From Amsterdam canals to world-famous Amsterdam museums and historical Amsterdam sights, it is one of the most romantic and beautiful cities in Europe. Canal cruises are a popular way to see the city from the perspective of its canals.",
},
{
  city: "Prague",
  country: "Czech Republic",
  photo: "https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJhZ3VlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  population: 1309000,
  foundation: "1504-04-22T00:00:00.000Z",
  description: "The city of Prague has a rich architectural heritage that reflects both the uncertain currents of history in Bohemia and an urban life extending back more than 1,000 years. The physical attractions and landmarks of Prague are many. Among the finest is the Charles Bridge (Karlův most), which stands astride the Vltava River.",
},
{
  city: "Rome",
  country: "Italy",
  photo: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  population: 2873000,
  foundation: "0600-09-10T03:53:48.000Z",
  description: "Rome is often referred to as the City of Seven Hills due to its geographic location, and also as the Eternal City. Rome is generally considered to be the cradle of Western civilization and Christian culture, and the centre of the Catholic Church.",
},
{
  city: "London",
  country: "United Kingdom",
  photo: "https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9uZG9ufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  population: 8982000,
  foundation: "1600-03-25T00:00:00.000Z",
  description: "London is famous for Big Ben, Buckingham Palace, British Museum, and Tower Bridge. London is also known for its rich history, double-decker buses, red phone booths, world-class museums and galleries, gigantic lush parks, financial districts, and cosmopolitan vibes.",
},
{
  city: "New York",
  country: "USA",
  photo: "https://images.unsplash.com/photo-1582760548598-0bccdf815aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGltZXMlMjBzcXVhcmV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  population: 2131233,
  foundation: "1920-10-15T00:00:00.000Z",
  description: "New York City is called the City of Dreams for a reason. This city is perfect for college graduates, as the city's businesses offer world-class internships in all the major industries. The city also offers unparalleled access to the arts community for those who wish to pursue life-long dreams as artists.",
},
{
  city: "Paris",
  country: "France",
  photo: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  population: 2161000,
  foundation: "1000-08-12T00:00:00.000Z",
  description: "Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city.",
},
{
  city: "Madrid",
  country: "Spain",
  photo: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFkcmlkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  population: 3223000,
  foundation: "1428-06-12T00:00:00.000Z",
  description: "It is a modern metropolitan city and an economical and industrial center of Spain, and, with its population of nearly 3,5 million people, is also the biggest city in Spain. It is located in the centre of the Iberian Peninsula, and is surrounded by mountains and natural parks.",
},
{
  city: "Tokyo",
  country: "Japan",
  photo: "https://images.unsplash.com/photo-1549693578-d683be217e58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dG9reW98ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  population: 13960000,
  foundation: "1144-09-27T00:00:00.000Z",
  description: "Tokyo is the administrative, cultural, financial, commercial, and educational centre of Japan and the focus of an extensive urban complex that includes Kawasaki and Yokohama. Attractions include the Imperial Palace, encircled by stone-walled moats and broad gardens, and numerous temples and shrines.",
},
{
  city: "Saint Petersburg",
  country: "Russia",
  photo: "https://images.unsplash.com/photo-1579677359441-a59fa83ecc40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FpbnQlMjBwZXRlcnNidXJnfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  population: 4991000,
  foundation: "1132-12-12T00:00:00.000Z",
  description: "St Petersburg is home to Russia's best preserved and most elaborate constructions from the extravagant Tsarist era. Brimming with baroque palaces, classical sculptures, royal gardens, and grandiose cathedrals, you can not simply miss to visit St Petersburg in your lifetime.",
},
{
  city: "Athens",
  country: "Greece",
  photo: "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXRoZW5zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  population: 3167000,
  foundation: "1524-02-27T00:00:00.000Z",
  description: "Athens is known to be the birthplace of democracy and the idea that all citizens should have a voice in governing their society. Athens also houses many historic landmarks, such as temples and theatres, which were made by ancient architects during the Classical period.",
},
{
  city: "Buenos Aires",
  country: "Argentina",
  photo: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVlbm9zJTIwYWlyZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  population: 2131233,
  foundation: "1816-05-15T00:00:00.000Z",
  description: "Buenos Aires is the capital and largest city of Argentina. It is located on the western shore of the estuary of the Río de la Plata, on the southeastern coast of the South American continent. Much of the city’s architecture is characterized by its eclectic nature, with elements resembling Barcelona, Paris and Madrid, even Italian and French influences. Tango music was born in the suburbs of Buenos Aires but now consists of a variety of styles that developed in different regions and other locations around the world.",
},
{
  city: "Rio de Janeiro",
  country: "Brasil",
  photo: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  population: 21312312,
  foundation: "1565-10-10T00:00:00.000Z",
  description: "Rio de Janeiro is the second largest city in Brazil. It is the capital of the state of Rio de Janeiro. Until April 21, 1960 it was the capital city of Brazil. According to the 2000 Census, the city had 5,473,909 people, and an area of over 1,000 km2.",
})