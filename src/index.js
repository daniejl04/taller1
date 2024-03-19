const express = require('express');
const bodyparser = require('body-parser');

const connectDB = require('./config/database.js')
const routers = require('./routes/index.js')

connectDB()
const app = express();
port = 3000

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended: false}))

app.use('/', routers)

app.listen(port, () => {console.log(`listening on port ${port}`)})