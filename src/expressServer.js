const express = require('express');
const router = require('./routes/routes');
const path = require("path");
const cors = require('cors');


const app = express();
const AllowedCors = {
    origin: "http://localhost:3000"
}


app.set("view engine", 'pug');
app.set("views", path.join(__dirname, "views"));


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('static'));
app.use(cors(AllowedCors));
app.use('/', router);


module.exports = app;