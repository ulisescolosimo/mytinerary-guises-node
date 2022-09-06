const Comment = require('../models/Comment')

const commentController = {

    getAllComments: async(req, res) => {

        let comment = await Comment.find()
            .populate('itinerary')
            
        try{
            if (comment.length > 0) {
                res.status(200).json({
                    message: "you get all the comments",
                    response: comment,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "could't find all the comments",
                    success: false
                })
            }
        }catch(error) {
            console.log(error)
        }
    },

    createComment: async(req, res) => {
            try {
                await new Comment(req.body).save()
                res.status(201).json({
                    message: 'Comment created',
                    success: true
                })
            }catch (error) {
                res.status(400).json({
                    message: 'error creating Comment',
                    success: false
                })
            }
        },
    

    deleted: async(req,res) => {
      const {id} = req.params
      try {
          let deleted = await Comment.findByIdAndDelete({_id:id})
          if (deleted) {
            res.status(200).json({
                  message: "deleted successfully",
                  success: true
              })
          } else {
              res.status(404).json({
                  message: "deleted failed",
                  success: false
              })
          }
      }catch (error) {
          console.log(error)
          res.status(404).json({
            message: "error",
            success: false
        })
          }
      }}

module.exports = commentController