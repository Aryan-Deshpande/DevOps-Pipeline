const express = require('express');
const path  = require('path');
const bodyparser = require('body-parser')
require('dotenv').config();

const app = express();

app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.get('/test', (req,res) => {
    res.sendFile(__dirname + "/test.html");
})

app.listen(process.env.PORT, (err) => {
    console.log(`Server is Listening on PORT ${process.env.PORT}`);
})