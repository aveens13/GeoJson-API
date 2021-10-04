const path = require('path')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const router = require('./Routes/location')
dotenv.config({path: './.env' })
const connectDB = require('./connection');

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api/v1/location',router);

app.listen(PORT,()=>{
    console.log(`Server up: https://localhost:${PORT}`)
});