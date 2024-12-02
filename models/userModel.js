const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { unique } = require("underscore");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please insert a username"]
    },
    email: {
        type: String,
        required: [true, "Please insert an email address"],
        unique: [true, "Email address already taken"]
    },
    password: {
        type: String,
        required: [true, "Please add the user password"]
    },
}, {
    timeStamp: true
});

module.exports = mongoose.model("User", userSchema);