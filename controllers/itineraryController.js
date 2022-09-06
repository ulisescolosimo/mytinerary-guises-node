const Itinerary = require('../models/Itinerary')


const itineraryController = {

      create: async(req, res) => {
            
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
      deleted: async(req,res) => {
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
      
      update: async(req, res) => {

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
    
    readAll: async (req, res) => {
        let itineraryFind 
        let query = {}

        /* if(req.query.user){
            query.user = req.query.user
        } */

        if(req.query.city){
            query.city = req.query.city
        }
        try {
            itineraryFind = await Itinerary.find(query)
                .populate('city')
                /* .populate('user', {name:1, mail:1}) */
            if (itineraryFind) {
                res.status(200).json({
                    message: "Itinerary",
                    response: itineraryFind,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: 'Couldnt find itinerary',
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: 'Itineraries not found ',
                success: false
            })
        }}

}
module.exports = itineraryController