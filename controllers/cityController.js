const City = require('../models/City')

const cityController = {

    create: async(req,res) => {

        try {
            let city = await new City(req.body).save()

            res.status(201).json({
                message: 'created',
                success: true,
                id: city._id
            })
        }catch (error) {
            res.status(400).json({
                message: 'error creating',
                success: false
            })
        }
    },

    read: async(req,res) => {
        const {id} = req.params
        try {
            let city = await City.findOne({_id:id})
            if (city) {
                res.status(200).json({
                    message: "you get one city",
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "couldn't find city",
                    success: false
                })
            }
        } catch(error) {
            console.log(error)
            res.status(400).json({
                message: "error",
                success: false
            })
        }
    },

    readAll: async(req, res) => {
    
        let city = await City.find()
        try{
            if (city.length > 0) {
                res.status(200).json({
                    message: "you get all the cities",
                    response: city,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "could't find all the cities",
                    success: false
                })
            }
        }catch(error) {
            console.log(error)
        }
        },

    deleted: async(req, res) => {
        const {id} = req.params
        try {
            let deleted = await City.findByIdAndDelete({_id:id})
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
    }catch(error) {
        console.log(error)
    }
    },

    update: async(req, res) => {

    const id  = req.params.id
    const body = req.body

    try {
        let updated = await City.findByIdAndUpdate(id, body)
        
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
    }catch(error) {
        console.log(error)
    }
    },

    readCity: async(req, res) => {

        try{
            let regexp = new RegExp("^"+ req.query.city)

            let cities = await City.find({city: {$regex: regexp}})

            if(cities.length > 0){
                res.status(200).json({
                    message: "City found",
                    response: cities,
                    success: true
                })
            }else{
                res.status(404).json({
                    message: "City not found",
                    success: false
                })
            }
        }catch(error){
            console.log(error)
            res.status(500).json({
                message: 'Error. Nothing found',
                success: false
            })
        }
    }
}

module.exports = cityController