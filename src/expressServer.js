const express = require('express');
const router = require('./routes/routes');
const path = require("path");

const app = express();

app.set("view engine", 'pug');
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('static'));

app.use('/', router);

module.exports = app;