const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/test', (err) => {
    if (err) throw err;
    console.log("Connection to mongodb succesful.");
});