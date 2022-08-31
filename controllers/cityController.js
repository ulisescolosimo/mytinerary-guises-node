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
    let query = {}

    if (req.query.city) {
        query.city = req.query.city
    }

    if (req.query.country) {
        query.country = req.query.country
    }

    if (req.query.photo) {
        query.photo = req.query.photo
    }

    if (req.query.population) {
        query.population = req.query.population
    }

    if (req.query.foundation) {
        query.foundation = req.query.foundation
    }

    let city = await City.find(query)
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
    }
}

module.exports = cityController