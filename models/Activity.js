const mongoose = require('mongoose')

const ActivitySchema = new mongoose.Schema({
      name: {type: String, required: true},
      lastName:{type: String, required: true},
      mail:{type: String, required: true},
      password:{type: String, required: true},
      photo:{type: String, required: true},
      country:{type: String, required: true},

})


const Activity = mongoose.model(
      'Activities',
      ActivitySchema
)     
 
module.exports = Activity