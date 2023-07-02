
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const router = require('./routers/index')
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const PORT = process.env.PORT||5000;

async function startApp(){
    try {
        await mongoose.connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => console.log('listen on port '+ PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();

app.use(cookieParser());
app.use(express.json({limit: '3mb'}));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use('/api', router);
