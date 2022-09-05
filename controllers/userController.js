const User = require('../models/User')

const userController = {
    
    createUser: async(req,res) => {
        try {
            await new User(req.body).save()
            res.status(201).json({
                message: 'user created',
                success: true
            })
        }catch (error) {
            res.status(400).json({
                message: 'error creating user',
                success: false
            })
        }
    },
    getUsers: async(req, res) => {
        let user = await User.find()
            try{
                if (user.length > 0) {
                    res.status(200).json({
                        message: "you get all the users",
                        response: user,
                        success: true
                    })
                } else {
                    res.status(404).json({
                        message: "could't find all the users",
                        success: false
                    })
                }
            }catch(error) {
                console.log(error)
            }
        }
    }

module.exports = userController