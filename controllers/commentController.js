const Comment = require('../models/Comment')

const commentController = {

    readAllComments: async(req, res) => {

        let query = {}

        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }

        try {
            let comment = await Comment.find(query)
                .populate('itinerary', {name: 1, _id: 1})
                .populate('user', {name: 1, lastName: 1, photo: 1})

            res.status(200).json({
                response: comment,
                success: true,
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                message: "Comment not found",
                success: false
            })
        }
    },

    createComment: async (req, res) => {
        const {comment}  = req.body.comment
        const {itinerary} = req.body.itinerary
        let userId = req.user.id
        try {
            let newComment = await Comment.findOneAndUpdate(
                {_id:comment}, {$push: {comment: comment, user: userId, itinerary: itinerary}}, {new: true}).populate("comment.userId")

            res.status(200).json({
                success: true, 
                message: "Thanks for your comment !" })
                console.log(newComment);
        }
        catch(error) {
            console.log(error)
            res.json({
                success: false, 
                message: "Error creating Comment"
            })
        }
    },

    modifyComment: async (req, res) => {
        console.log(req.body)
        const {comment}  = req.body.comment
        let userId = req.user.id
  
        try {
          const newComment = await Comment.findOneAndUpdate(
            { "comment._id": req.params },{ $set: { "comment": req.body.comment }}, { new: true }).populate("comments.userId",);
  
            res.status(200).json({
            success: true,
            response: { newComment },
            message: "Your comment has been modified",
          });
          console.log(newComment)
        } catch (error) {
          console.log(error);
          res.json({
            success: true,
            message: "",
          });
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