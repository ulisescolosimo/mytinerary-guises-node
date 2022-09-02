const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
      comment: {type: String, required: true},
      user: {type: String,},
      itinerary: {type: String,},
})

const Comment = mongoose.model(
      'Comments',
      CommentSchema
)     

module.exports = Comment