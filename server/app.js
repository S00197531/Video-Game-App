const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

const PORT = 3000;
const api = require('./routes/api')
const app = express();

app.use(bodyParser.json());

app.use('/api', api)

//Index Route
app.get('/', function(req, res){
    res.send('Hello From Server')
})

app.listen(PORT, () => {
    console.log('Server started on port '+PORT)
});