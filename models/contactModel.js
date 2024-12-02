const { timeStamp } = require("console");
const { required } = require("joi");
const mongoose = require("mongoose");
const { type } = require("os");

const contactSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: [true, "Please insert a name"]
    },
    email: {
        type: String,
        required: [true, "Please insert an email address"]
    },
    phone: {
        type: String,
        required: [true, "Please insert a phone number"]
    }
}, 
{
    timeStamp: true
}
);

module.exports = mongoose.model("Contact", contactSchema);