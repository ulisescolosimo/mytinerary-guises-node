const request = require('supertest')  
const app = require('../app')         
const {assert} = require('chai')

describe('POST /itineraries', function () {
      
      it('Must respond with the likes', function (done) {
            request(app)
                .post('/itineraries')
                .send({
                  name: "Central Park" ,
                  user: "631661f9a2e5e80a7e6185ed",
                  city: "630fe20c311a12a197e553fb",
                  price: 5,
                  likes: [35],
                  tags: ["#Nature", "#CentralPark", "#Walk"],
                  duration: 400
                })
                .then(response => {
                    assert.isNotNumber(response.body.likes)
                    done()
                })
        })
      
      it('Must respond with 201 status code', function (done) {
          request(app)
              .post('/itineraries')
              .send({
                  name: "Central Park" ,
                  user: "631661f9a2e5e80a7e6185ed",
                  city: "630fe20c311a12a197e553fb",
                  price: 5,
                  likes: [35],
                  tags: ["#Nature", "#CentralPark", "#Walk"],
                  duration: 400
              })
              .expect(201, done)
      })


      it('Must respond with 400 status code', function (done) {
          request(app)
              .post('/itineraries')
              .send({  
              })
              .expect(400)
              .end(function (err, res) {
                  if (err) return done(err);
                  return done();
              })
      })
      
  })

  describe('GET /itineraries', function () {

      it('Read all itineraries', function (done) {
            request(app)
            .get('/itineraries/all')
            .expect(200)
            .end(function (err, res){
                  if(err) return done(err);  
                  return done();             
            })

  })
})