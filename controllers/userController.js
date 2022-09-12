const User = require('../models/User')
const crypto = require('crypto') //libreria nativa de node js para generar codigos aleatorios y unicos
const bcryptjs = require('bcryptjs')
const sendMail = require('./sendMail')

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
        },
        deleteUser: async(req, res) => {
            const {id} = req.params
            try {
                let deleted = await User.findByIdAndDelete({_id:id})
                if (deleted) {
                res.status(200).json({
                    message: "user deleted successfully",
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "user deleted failed",
                    success: false
                })
            }
        }catch(error) {
            console.log(error)
        }
        },

        signUp: async(req, res) => {

            let {name,photo,country,email,pass,role,from} = req.body // tiene que venir del front para usar este metodo para ambos casos// tiene que venir del front para saber desde q red social se crea el usuario

            try {
                let user = await User.findOne({email})
                if(!user){
                    let logged = false
                    let verified = false
                    let code = crypto
                            .randomBytes(15) //15 digitos
                            .toString('hex') // hexadecimal
                    if(from == 'form'){
                        pass = bcryptjs.hashSync(pass, 10)
                        user = await User({name,photo,email,country,pass: [pass],role,from: [from],logged,verified,code}).save()
                        // aca hay que incorporar la funcion para el envio de mail de verificacion
                        sendMail(email, code);
                        res.status(200).json({
                            message: "user signed up from form",
                            success: true
                        })
                    } else {
                        pass = bcryptjs.hashSync(pass, 10)
                        verified = true
                        user = await new User({name,photo,email,country,pass:[pass],role,from:[from],logged,verified,code}).save()
                        // no hace falta enviar el mail de verificacion
                        res.status(201).json({
                            message: "user signed up from "+from,
                            success: true
                        })
                    }
                } else {
                    if(user.from.includes(from)){
                        res.status(200).json({
                            message: "user already registered through this method",
                            success: false
                        })
                    } else {
                        user.from.push(from)
                        user.verified = true // si el usuario ya tiene registros previos, significa que ya se verifico en algun momento
                        user.pass.push(bcryptjs.hashSync(pass, 10))
                        await user.save()
                        res.status(201).json({
                            message: "user signed up from: " + from,
                            success: true
                        })
                    }
                }
            }catch (error){
                console.log(error);
                res.status(400).json({
                    message: "couldn't signed up",
                    success: false
                })
            }
        },

        verifyMail: async(req, res) => {
            const {code} = req.params
            try {
                let user = await User.findOne({code:code})
            if (user) {
                user.verified = true
                await user.save()
                res.redirect('http://localhost:3000/')
            } else {
                res.status(404).json({
                    massage: "email has not account yet",
                    success:false
                })
            }
            } catch (error) {
                console.log(error)
                res.status(400).json({
                    message: "could't verify account",
                    success: false
                })
            }
            
        },

        signIn: async(req, res) => {

            const { email, pass , from } = req.body

            try {
                let user = await User.findOne({email})

                if(!user){
                    res.status(404).json({
                        success: false,
                        message: "User does not exists, please sign up",
                    })
                } else if(user.verified) { // si existe y esta verificado

                    let checkPass = user.pass.filter(element => bcryptjs.compareSync(pass, element)) //si cada pass puede llegar a ser element. si coincide la guarda en la variable del filtro

                    if(from == 'from'){

                        if(checkPass.length > 0) /* le pido un length porque checkpass es un array */ {
                            
                            let loginUser = {
                                id: user._id,
                                name: user.name,
                                email: user.email,
                                role: user.role,
                                photo: user.photo
                            }
                            
                            user.logged = true;
                            await user.save();

                            res.status(200).json({
                                success: true,
                                response: {user: loginUser},
                                message: "Welcome " + user.name
                            })
                            
                        } else {
                            res.status(400).json({
                                success: false,
                                message: "Username or password incorrect."
                            })
                        }
                    } else {

                        if (checkPass.length > 0) {

                        let loginUser = {
                            id: user._id,
                            name: user.name,
                            email: user.email,
                            role: user.role,
                            photo: user.photo
                        }

                        user.logged = true;
                        await user.save();

                        res.status(200).json({
                            success: true,
                            response: {user: loginUser},
                            message: "Welcome " + user.name
                        })

                    } else {

                        res.status(400).json({
                            success: false,
                            message: "Username or password incorrect."
                        })

                    }
                }

                } else { //si existe pero no esta verificado
                    res.status(200).json({
                        success: false,
                        message: "User not verified. Please check your email and try again."
                    })
                }

            } catch (error) {
                console.log(error);
            }
        },

        signOut: async() => {}, // findOneAndUpdate y cambiar logged de true a false
    }

module.exports = userController