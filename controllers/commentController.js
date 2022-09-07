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