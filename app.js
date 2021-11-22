require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/',(req, res)=>{
    res.send('Welcome to the Vetevo homepage');
});

const weightRoutes = require('./routes/weight');
app.use('/weights',weightRoutes);

// Connect to DB
 mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true},()=>{
     console.log('Connected to DB');
 });

app.listen(process.env.PORT || 5000);