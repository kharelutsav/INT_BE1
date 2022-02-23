const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String, maxlength: 25, required: true},
    email: {type:email, unique: true, required: true}
});