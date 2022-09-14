const request = require('supertest')  
const app = require('../app')         
const {assert} = require('chai')


describe('POST /auth/signin', function () {

      it('must respond with 201 status code', function (done) {
        
            request(app)
                .post('/auth/signin')
                .send({
                  email:"guidoseia5@gmail.com",
                  pass:"guidin",
                  from:"form"     
                })
                .expect(201, done)
        }),

      it('Must respond with 400 status code', function (done) {
            request(app)
                .post('/auth/signin')
                .send({  
                  email:"guidoseia5@gmail.com",
                  pass:"guidin",
                  from:"form"    
                })
                .expect(400)
              .end(function (err, res) {
                  if (err) return done(err);
                  return done();
              })})

})