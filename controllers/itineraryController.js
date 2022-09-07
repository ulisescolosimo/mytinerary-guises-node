const Itinerary = require('../models/Itinerary')

const itineraryController = {

    createIti: async(req, res) => {
            
            try {
                await new Itinerary(req.body).save()
                res.status(201).json({
                        massage: 'created',
                        success:true
                })      
                
            }catch (error) {
                console.log(error)
                res.status(400).json({
                        message: 'error creating',
                        success: false
            })
    }
},
    deleteIti: async(req,res) => {
            const {id} = req.params
            try {
                let deleted = await Itinerary.findByIdAndDelete({_id:id})
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
            },
    
    updateIti: async(req, res) => {

            const id  = req.params.id
            const body = req.body
        
            try {
                let updated = await Itinerary.findByIdAndUpdate(id, body)
                
                if(updated) {
                res.status(200).json({
                    message: "update successfully",
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "update failed",
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
    },
    
    readIti: async (req, res) => {

        let query = {}

        if (req.query.city) {
            query.city = req.query.city
        }

        if (req.query.user) {
            query.user = req.query.user
        }

        try {
            let itineraries = await Itinerary.find(query)
                .populate('user', { name: 1 })
                .populate('city', { city: 1 })
            
                if(itineraries.length > 0) {
                    message = "Itineraries found"
                }else{
                    message = "City without itineraries"
                }

            res.status(200).json({
                response: itineraries,
                message,
                success: true
            })

        } catch (error) {
            console.log(error)
            res.status(404).json({
                message: "Itinerary not found",
                success: false
            })
        }
    },

        readAll: async(req, res) => {
    
            let itineraries = await Itinerary.find()
            try{
                if (itineraries) {
                    res.status(200).json({
                        message: "you get all the itineraries",
                        response: itineraries,
                        success: true
                    })
                } else {
                    res.status(404).json({
                        message: "could't find all the itineraries",
                        success: false
                    })
                }
            }catch(error) {
                console.log(error)
            }
        }
}

module.exports = itineraryController