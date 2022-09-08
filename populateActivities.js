const mongoose = require('mongoose')

require('dotenv').config();

const db = require('./config/database')

const Activity = require('./models/Activity')

Activity.create(
    {
    name: "Climb to the top by ladders",
    photo: "https://images.unsplash.com/photo-1565475783696-96001eff1b45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3RhdHVlJTIwb2YlMjBsaWJlcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e6"
    },{
    name: "Take a picture of Manhattan",
    photo: "https://images.unsplash.com/photo-1547221034-270a96fb7cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHN0YXR1ZSUyMG9mJTIwbGliZXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e6"
    },
    {
    name: "Take the ferry",
    photo: "https://images.unsplash.com/photo-1503008374633-91660bc82040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN0YXR1ZSUyMG9mJTIwbGliZXJ0eSUyMGZlcnJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e6"
    },
    {
    name: "Mona Lisa",
    photo: "https://images.unsplash.com/photo-1568578221507-2508a6c69065?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG91dnJlJTIwbW9uYSUyMGxpc2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e7"
    },
    {
    name: "Tour of scultures",
    photo: "https://images.unsplash.com/photo-1628008158807-812857c037c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvdXZyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e7"
    },
    {
    name: "Painted ceilings",
    photo: "https://images.unsplash.com/photo-1628811599940-5307c9cd5ba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxvdXZyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e7"
    },
    {
    name: "Picture from the top of the Sena River",
    photo: "https://images.unsplash.com/photo-1555425748-f780612e5634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm90cmUlMjBkYW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e8"
    },
    {
    name: "Meet the gargoyles",
    photo: "https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bm90cmUlMjBkYW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e8"
    },
    {
    name: "Know the church inside",
    photo: "https://images.unsplash.com/photo-1655971138117-a565da1eba15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bm90cmUlMjBkYW1lJTIwY2h1cmNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e8"
    },
    {
    name: "Look through the telescope",
    photo: "https://images.unsplash.com/photo-1649642131130-ef69ebb7a50b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWlmZmVsJTIwdG93ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e9"
    },
    {
    name: "Climb to the top by ladders",
    photo: "https://images.unsplash.com/photo-1650540529469-dc00ccbad0a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dG9ycmUlMjBlaWZmZWwlMjBlc2NhbGVyYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e9"
    },
    {
    name: "Have a coffee in the gardens",
    photo: "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dG9ycmUlMjBlaWZmZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e9"
    },
    {
    name: "Meet the royal guard",
    photo: "https://images.unsplash.com/photo-1532264251691-2ad92a2ec88f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVja2luZ2hhbSUyMHBhbGFjZSUyMGd1YXJkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14ea"
    },
    {
    name: "Visit Queen's gallery",
    photo: "https://www.viajarlondres.com/img/visitar-interior-buckingham-palace.jpg",
    itinerary: "6319391bcd18c2e9546a14ea"
    },
    {
    name: "See royal cars",
    photo: "https://www.viajarlondres.com/img/cocheras-reales-buckingham.jpg",
    itinerary: "6319391bcd18c2e9546a14ea"
    },
    {
    name: "Play outdoor games",
    photo: "https://images.unsplash.com/photo-1605540827677-693bad36b91f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2VudHJhbCUyMHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e4"
    },
    {
    name: "Get a bike to take a ride",
    photo: "https://images.unsplash.com/photo-1585064688684-6ba96e092bb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2VudHJhbCUyMHBhcmslMjBiaWNpY2xldGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e4"
    },
    {
    name: "Get a boat on the lake",
    photo: "https://images.unsplash.com/photo-1544267462-069800cd7cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNlbnRyYWwlMjBwYXJrJTIwYm90ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e4"
    },
    {
    name: "Visit Mc Donald's",
    photo: "https://images.unsplash.com/photo-1587161584760-f51779fb276a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRpbWVzJTIwc3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e5"
    },
    {
    name: "Enjoy the lights at night",
    photo: "https://images.unsplash.com/photo-1511268559489-34b624fbfcf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGltZXMlMjBzcXVhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e5"
    },
    {
    name: "Have a drink in a bar",
    photo: "https://images.unsplash.com/photo-1626388885787-3fcbca1f3537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGFrZSUyMGElMjBkcmlua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14e5"
    },
    {
    name: "Get a religious experience",
    photo: "https://civitavecchia.portmobility.it/sites/default/files/sinagoga_ok.jpg",
    itinerary: "6319391bcd18c2e9546a14ed"
    },
    {
    name: "Visit Portico d'Ottavia",
    photo: "https://civitavecchia.portmobility.it/sites/default/files/portico_di_ottavia_ok.jpg",
    itinerary: "6319391bcd18c2e9546a14ed"
    },
    {
    name: "Visit Turtle fountain, little jewel in the ghetto",
    photo: "https://civitavecchia.portmobility.it/sites/default/files/fontana_delle_tartarughe_roma_ok.jpg",
    itinerary: "6319391bcd18c2e9546a14ed"
    },
    {
    name: "Tour of the underground",
    photo: "https://media.tacdn.com/media/attractions-splice-spp-360x240/07/01/31/ca.jpg",
    itinerary: "6319391bcd18c2e9546a14ee"
    },
    {
    name: "Meet the old battlefield",
    photo: "https://images.unsplash.com/photo-1513120052856-2b18c0d4f696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29saXNlb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14ee"
    },
    {
    name: "Visit Ancient Rome",
    photo: "https://images.unsplash.com/photo-1512767811219-ed2f11ce5d0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwcm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14ee"
    },
    {
    name: "Try potato omelette",
    photo: "https://images.unsplash.com/photo-1607877200978-3cab430e00cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9ydGlsbGElMjBkZSUyMHBhcGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14ef"
    },
    {
    name: "Visit museum of romanticism",
    photo: "https://img.europapress.es/fotoweb/fotonoticia_20200713131450_420.jpg",
    itinerary: "6319391bcd18c2e9546a14ef"
    },
    {
    name: "See people dancing native music",
    photo: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhbmlzaCUyMGRhbmNpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14ef"
    },
    {
    name: "Visit Casino Gran Via",
    photo: "https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzaW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14f0"
    },
    {
    name: "Watch a movie at Cine Callao",
    photo: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2luZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    itinerary: "6319391bcd18c2e9546a14f0"
    },
    {
    name: "Visit El Oso y el Madroño",
    photo: "https://www.inmigrantesenmadrid.com/wp-content/uploads/2016/06/Oso_Madroo_3.jpg",
    itinerary: "6319391bcd18c2e9546a14f0"
    },
    {
    name: "Visit Square Sintagma",
    photo: "https://a.cdn-hotels.com/gdcs/production61/d1144/8bc02ddc-92e3-407c-8e0f-27f9b8fc601a.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
    itinerary: "6319391bcd18c2e9546a14f1"
    },
    {
    name: "Changing of the guard at the Tomb of the Unknown Soldier",
    photo: "https://a.cdn-hotels.com/gdcs/production49/d1305/0224fe26-aff0-40e8-9c7f-726188a8b553.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
    itinerary: "6319391bcd18c2e9546a14f1"
    },
    {
    name: "Visit Acropolis Museum",
    photo: "https://a.cdn-hotels.com/gdcs/production47/d15/087c4a25-9696-40fc-a33f-9c4092936935.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
    itinerary: "6319391bcd18c2e9546a14f1"
    },
    {
    name: "Get into the Partenon",
    photo: "https://guias-viajar.com/wp-content/uploads/2017/08/atenas-acropolis-001-600x330.jpg.webp",
    itinerary: "6319391bcd18c2e9546a14f2"
    },
    {
    name: "Get a guided tour of Athens",
    photo: "https://guias-viajar.com/wp-content/uploads/2017/08/atenas-acropolis-008-572x550.jpg",
    itinerary: "6319391bcd18c2e9546a14f2"
    },
    {
    name: "Visit erechtheion temple",
    photo: "https://guias-viajar.com/wp-content/uploads/2017/08/atenas-acropolis-010-600x512.jpg",
    itinerary: "6319391bcd18c2e9546a14f2"
    },
    {
    name: "Visit plaza de mayo",
    photo: "https://thumbs.dreamstime.com/b/plaza-de-mayo-buenos-aires-la-argentina-35821905.jpg",
    itinerary: "6319391bcd18c2e9546a14f3"
    },
    {
    name: "Visit presidential office and building",
    photo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Casa_Rosada_Buenos_Aires.JPG",
    itinerary: "6319391bcd18c2e9546a14f3"
    },
    {
    name: "Take a pic of the Cabildo",
    photo: "https://www.infobae.com/new-resizer/NQzadbh9QP1HOO7ic-2WXjbv5RE=/1200x900/filters:format(webp):quality(85)//s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/03/04163903/cabildo.jpg",
    itinerary: "6319391bcd18c2e9546a14f3"
    },
    {
    name: "Visit diamond room",
    photo: "https://es.itravelspb.com/wp-content/uploads/2020/03/sala-de-estar-dorada-en-el-Hermitage.jpg",
    itinerary: "6319391bcd18c2e9546a14f4"
    },
    {
    name: "Visit golden room",
    photo: "https://thumbs.dreamstime.com/b/el-sal%C3%B3n-de-armamento-en-museo-estatal-hermitage-st-petersburg-rusia-es-un-arte-y-cultura-la-san-petersburgo-segundo-m%C3%A1s-grande-191875816.jpg",
    itinerary: "6319391bcd18c2e9546a14f4"
    },
    {
    name: "Observe the cats that live in the museum",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Hermitage_cat.jpeg/1200px-Hermitage_cat.jpeg",
    itinerary: "6319391bcd18c2e9546a14f4"
    },
    {
    name: "Take a guide tour",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/22/44/04/a-free-audio-guide-is.jpg?w=1100&h=-1&s=1",
    itinerary: "6319391bcd18c2e9546a14f5"
    },
    {
    name: "Understand how Anna Frank escaped",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/ee/16/7f/anne-frank-house-anne.jpg?w=600&h=-1&s=1",
    itinerary: "6319391bcd18c2e9546a14f5"
    },
    {
    name: "Interact with objects",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/12/a6/c6/remembrance-stones.jpg?w=1200&h=-1&s=1",
    itinerary: "6319391bcd18c2e9546a14f5"
    },
    {
    name: "Visit Westminster Abbey",
    photo: "https://miviaje.com/wp-content/uploads/2017/12/abadia-westminster-londres.jpg?auto=webp&quality=45&width=1920&crop=16:9,smart,safe",
    itinerary: "6319391bcd18c2e9546a14eb"
    },
    {
    name: "Cross Westminster Bridge to the London Eye",
    photo: "https://miviaje.com/wp-content/uploads/2017/11/london-eye-londres.jpg?auto=webp&quality=45&width=1920&crop=16:9,smart,safe",
    itinerary: "6319391bcd18c2e9546a14eb"
    },
    {
    name: "See the interior of the Houses of Parliament",
    photo: "https://miviaje.com/wp-content/uploads/2017/10/palacio-westminster-londres.jpg?auto=webp&quality=45&width=1920&crop=16:9,smart,safe",
    itinerary: "6319391bcd18c2e9546a14eb"
    },
    {
    name: "Visit the Bridge Theatre",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/c9/a2/32/a-leaving-view.jpg?w=1200&h=-1&s=1",
    itinerary: "6319391bcd18c2e9546a14ec"
    },
    {
    name: "Sailing Barge Lady Daphne",
    photo: "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/f5/9d/39/photo2jpg.jpg",
    itinerary: "6319391bcd18c2e9546a14ec"
    },
    {
    name: "Visit Sir Simon Milton Statue",
    photo: "https://assets.londonist.com/uploads/2017/10/i875/20080648775_2f6b734f36_b.jpg",
    itinerary: "6319391bcd18c2e9546a14ec"
    }
)