const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
      comment: {type: String, required: true},
      user: {type: String, required: true},
      itinerary: {type: String, required: true},
})

const Comment = mongoose.model(
      'Comments',
      CommentSchema
)     

module.exports = Comment