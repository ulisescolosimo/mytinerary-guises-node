const Itinerary = require('../models/Itinerary')
const Joi = require('joi')

const validator = Joi.object({
    name: Joi.string()
    .min(3)
    .max(35)
    .required()
    .messages({
        'string.min': 'Name: min 3 characters',
        'string.max': 'Name: max 35 characters'
    }),
    user: Joi.string()
    .required(),

    city: Joi.string()
    .min(3)
    .required()
    .messages({
        'string.min' : 'City : min 3 charaacters'
    }),

    price: Joi.number()
    .min(1)
    .integer()
    .required()
    .messages({
        'number.integer' : 'Price: enter an integer',
        'number.greater' : 'Price: min 1 character'
    }),

    likes: Joi.array()
    .required(),

    tags: Joi.array()
    .required(),

    duration: Joi.number()
    .min(1)
    .integer()
    .required()
    .messages({
        'number.integer' : 'Duration: enter an integer',
        'number.min' : 'Duration: min 1 character'
    }),
})


const itineraryController = {

    createIti: async(req, res) => {
            
            try {
                let result = await validator.validateAsync(req.body)

                let itinerary = await new Itinerary(req.body).save()
                res.status(201).json({
                        massage: 'itinerary created',
                        success:true,
                        response: itinerary
                })      
                
            }catch (error) {
                console.log(error)
                res.status(400).json({
                        message: error.message,
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
                .populate('user', { name: 1, photo: 1, lastName: 1})
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
        },
        
        likeDislike: async(req, res) => {
            let { id } = req.user
            let { eventId } = req.body
            try{
                let itinerary = Itinerary.findOne({_id:eventId })

                if(itinerary && itinerary.likes.includes(id)){
                    await itinerary.likes.pull(id)
                    await itinerary.save()
                    res.status(200).json({
                        message: 'Itinerary disliked',
                        success: true
                    })
                }else if(!itinerary.likes.includes(id)){
                    await itinerary.likes.push(id)
                    await itinerary.save()
                    res.status(200).json({
                        message: 'Itinerary liked',
                        success: true
                    })
                }else{
                    res.status(200).json({
                        message: 'Itinerary not found',
                        success: true
                    })
                }

            }catch(error) {
                console.log(error);
                res.json({
                    message: 'error',
                    success: false
                })
            }
            
        }
}

module.exports = itineraryController