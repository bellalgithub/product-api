
const {readdirSync} = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

//routes middlewares
readdirSync('./routes').map(r => app.use('/api/v1', require(`./routes/${r}`)));

//server
const port = process.env.SERVER_PORT || 8086;

//connect to DB and Start Server
mongoose
    .connect(process.env.DATABASE)
    .then(()=>{
app.listen(port, ()=>{
    console.log(`Server is running on Port : ${port}`);
})
    })
    .catch(err => console.log(err));


