const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

mongoose.connect(config.database)

mongoose.connection.on('connected', () => {
    console.log('Conected to database '+config.database)
})

mongoose.connection.on('error', (err) => {
    console.log('error to database '+err)
})

const app = express();

const users = require('./routes/users');

const port = 3000;

app.use(cors());

//Set Static Folder
//app.use(express.static(path.join(__dirname, 'src')))

//Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

//Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
})

app.listen(port, () => {
    console.log('Server started on port '+port)
});