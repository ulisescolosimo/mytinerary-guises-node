const request = require('supertest')  
const app = require('../app')         
const {assert} = require('chai')

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWY4YWY0YjBlZDUyZmM3ZjcxN2IwNCIsImlhdCI6MTY2Mzk0MDQzOCwiZXhwIjoxNjY0MDI2ODM4fQ.-j195Sd8k1p2iC61A__lxuMUMJ8MwCbpMFRR4L0W5K0"

 describe('POST /comments', function () {  

      it('Must respond with 201 status code, comment created', function(done) {
            request(app)
                .post('/comments/:id')
                .send({
                  "comment" : " Great Job !",
                  "user": "631f8af4b0ed52fc7f717b04",
                  "itinerary": "632a10449c38f1e6a4588038"
                })
                .set('Authorization', `Bearer ${token}`)
                .expect(201, done)
      })

}) 

 describe('GET /comments', function () {

      it('Must respond with 200 status code, read all comments', function (done) {
            request(app)
                  .get('/comments')
                  .expect(200, done)            
  })
}) 

describe('PATCH /comments', function () {
      // test para modificación de comentario
      it('Must respond with 200 status code, comment modify', function (done) {
          request(app)
              .patch('/comments/632dc4a990e5ea4e5a33fd7e')
              .send(
                  {
                      "comment": "Beautiful travel !",
                  }
              )
              .set('Authorization', `Bearer ${token}`)
              .expect(200, done)
      })
  })