const express = require('express');
const cors = require('cors');
const db = require('./db');
const routes = require('./routes');

// initial configuration
const app = express();
require('dotenv').config();

// middleweres
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes by middeware
app.use('/api',routes);


// runnning the server
app.listen(process.env.PORT,async ()=>{
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log(`listening on ${process.env.PORT}`);
});
