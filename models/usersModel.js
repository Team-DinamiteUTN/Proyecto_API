const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(

    {
        name: {
            type: String,
            required: [true, "Please Enter a user name"],
        },
        password: {
            type: String,
            required: [true, "Please Enter a Password"],

        }
    },
    {
        timestamps: true
    }

);

const User = mongoose.model("User", UserSchema);
module.exports = User;