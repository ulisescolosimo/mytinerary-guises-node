const Activity = require('../models/Activity')
const Actitivy = require('../models/Activity')

const activityController = {

    createActivity: async(req, res) => {
            try {
                await new Actitivy(req.body).save()
                res.status(201).json({
                        massage: 'Activity created',
                        success:true
                })      
                
            }catch (error) {
                console.log(error)
                res.status(400).json({
                        message: 'error creating activity',
                        success: false
            })
        }
    },
    readAllActivities: async(req, res) => {

        let query = {}

        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }

        try {
            let activities = await Activity.find(query)
                .populate('itinerary')

            res.status(200).json({
                response: activities,
                success: true,
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                message: "Activities not found",
                success: false
            })
        }
    },
    deleted: async(req, res) => {
        const {id} = req.params
        try {
            let deleted = await Activity.findByIdAndDelete({_id:id})
            if (deleted) {
            res.status(200).json({
                message: "Activity deleted successfully",
                success: true
            })
            } else {
            res.status(404).json({
                message: "Activity deleted failed",
                success: false
            })
            }
        }catch (error) {
            console.log(error)
            res.status(404).json({
                message: "Activities not found",
                success: false
            })
        }
    }
}


module.exports = activityController