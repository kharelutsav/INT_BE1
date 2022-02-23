const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/test');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String, maxlength: 25, required: true},
    email: {type:email, unique: true, required: true}
});