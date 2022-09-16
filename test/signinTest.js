const request = require('supertest')  
const app = require('../app')         

describe('POST /signin', function () {

  it('must respond with 404, User doesnt exists, please sign up', function(done){
    request(app)
        .post('/auth/signin')
        .send({
            email: "guidoo@gmail.com",
            pass: "guidin",
            from: "form"
        })
        .expect(404, done)
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
              })}),

              it('Must respond with 200', function(done) {   
                request(app)
                .post('/auth/signin')      
                .send({ 
                  email:"guidoseia5@gmail.com",
                  pass:"guido5",
                  from:"form"
                })
                .expect(200, done)
                                                   
          }) 
}) 