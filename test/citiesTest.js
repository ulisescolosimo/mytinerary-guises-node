/* const request = require('supertest')  
const app = require('../app')         
const {assert} = require('chai')

describe('POST /cities', function () {  

      it('Must respond with id', function(done) {   
            request(app)
            .post('/cities')      
            .send({ 
                  city :"cordoba",
                        country:"argentina",
                        photo: "http",                           
                        population: 34567543,                            
                        foundation: "1568",
                        description: "atr",                
            })
            .then (response => {  
                  assert.isString(response.body.id)
                  done()      
            })                                                                
      }) 

      it('Must respond with 201 status code', function(done) { 
            request(app)                              
                  .post('/cities')        
                  .send({                 
                        city :"cordoba",
                        country:"argentina",
                        photo: "http",                            
                        population: 34567543,                            
                        foundation: "1568",
                        description: "atr",
                  })
                  .expect(201, done)                 
               
      })
})

      it('must respond with 400 status code', function (done){
      request(app)
      .post('/cities')
      .send({})
      .expect(400)
      .end(function (err, res){
            if(err) return done(err);  
            return done();             
      })
}) */