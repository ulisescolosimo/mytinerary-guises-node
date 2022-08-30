const City = require('../models/City')

const cityController = {
    create: async(req,res) => {
        console.log(res.body)
        try {
            await new City(req.body).save()
            res.status(201).json({
                message: 'created',
                success: true
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
                    message: "could't find city",
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
    let city = await City.find({})
    try{
        if (city) {
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
                response: deleted,
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
}
}

module.exports = cityController