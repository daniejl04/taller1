const express = require('express');

const router = express.Router();

const userController = require('../controllers/userControllers.js')


try{
    router.get('/api/notes', userController.getNotes)
    router.post('/api/notes/new', userController.createNotes)
}catch{
console.log('algo anda mal')
}



module.exports = router;

