const mongoose = require('mongoose')


const notasSchema = new mongoose.Schema({
    notas:String
})

const notas = mongoose.model('notes', notasSchema)

module.exports = notas