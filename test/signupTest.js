const request = require('supertest')  
const app = require('../app')         
const {assert} = require('chai')


describe('POST /auth/signup', function () {

      it('must respond with 200 status code', function (done) {
            request(app)
                .post('/auth/signup')
                .send({
                  name: "Guidos Seia" ,
                  email: "guidoseia3354@gmail.com",
                  pass: "elcordobee",
                  role: "user",
                  photo: "https://pbs.twimg.com/profile_images/973255823148355584/PQrQ_HzA_400x400.jpg",
                  country: "Argentina",                  
                  from: "form"               
                })
                .expect(200, done)
        }),

      it('Must respond with 400 status code', function (done) {
            request(app)
                .post('/auth/signup')
                .send({ 
                  name: "Guido Seia" ,
                  email: "guidoseia23",
                  pass: "elcordobee",
                  role: "user",
                  photo: "https://pbs.twimg.com/profile_images/973255823148355584/PQrQ_HzA_400x400.jpg",
                  country: "Argentina",                  
                  from: "form"     
                })
                .expect(400, done)               
        })

        it('Must respond with 201 status code', function (done) {
          request(app)
              .post('/auth/signup')
              .send({ 
                name: "Ulises colosimo" ,
                email: "ulisescolosimoAcade@gmail.com",
                pass: "ulisesAcadee",
                role: "user",
                photo: "https://pbs.twimg.com/profile_images/973255823148355584/PQrQ_HzA_400x400.jpg",
                country: "Argentina",                  
                from: "google"     
              })
              .expect(201, done)               
      })
})   