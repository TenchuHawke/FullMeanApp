const mongoose = require("mongoose")

var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2, maxlength: 130 },
    email: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255,
        validate: {
            validator: function(v) {
                return emailRegex.test(v)
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 130,
    }
}, { timestamps: true })

// var UserSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String,
// }, { timestamps: true })

mongoose.model("User", UserSchema)