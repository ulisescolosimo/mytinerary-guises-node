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
                .populate('itinerary', {name: 1})

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
    }
}


module.exports = activityController