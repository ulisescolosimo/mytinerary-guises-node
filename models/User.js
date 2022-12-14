const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
      name: {type: String, required: true, min: 3, max: 35},
      email:{type: String, required: true,validate: function (value){
            if (!value.endsWith('.com')) {
                  throw new Error('INVALID_EMAIL')
            }
      } },
      pass:[{type: String, required: true, min:8, max:35}],
      role: {type: String, required: true},
      photo:{type: String, required: true, validate: function (value){
            if (!value.startsWith('http')) {
                  throw new Error('photo: The photo must start with "http"')
            }
      }},
      country:{type: String, required: true},
      from: [{type: String, required: true}],
      logged: {type: Boolean, required: true},
      verified: {type: Boolean, required: true},
      code:{type: String, required: true}
})

const User = mongoose.model('users', UserSchema)

module.exports = User