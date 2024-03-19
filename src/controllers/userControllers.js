const notas = require('../models/userModels.js')

const userController = {

    getNotes: async (req, res) => {

        try{
            const notes = await notas.find()
            res.json(notes)
        }catch(err){
            console.log('no se encontraron notas')
        }
    },

    createNotes: async (req, res) => {

        const newNota = req.body

        try{
            const note = new notas(newNota)
            const notaSave = await note.save()
            res.status(201).json(notaSave)
        }catch(err){

        } 
    },

}


module.exports = userController