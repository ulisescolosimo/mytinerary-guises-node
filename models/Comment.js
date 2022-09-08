const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
      comment: {type: String, required: true},
      user: {type: mongoose.Types.ObjectId, ref:'users'},
      itinerary: {type: mongoose.Types.ObjectId, ref:'itineraries'},
})

const Comment = mongoose.model(
      'comments',
      CommentSchema
)     

module.exports = Comment