const mongoose = require('mongoose');

let nota

const connectionData = async () => {

    try {

        if (!nota) {
            nota = mongoose.model('notes',require ('../models/userModels').schema)
        }
        await mongoose.connect('mongodb+srv://danielestebanjimenezlopez:jMVgHRtEX8rJ4yuB@data.vypajgk.mongodb.net/')
        .then(() => console.log('mongoose connection'))
        .catch((err) => console.log(err))
}catch{
    console.log('mongondb connection error',error);
    process.exit(1);
}

}

module.exports = connectionData;