const mongoose = require('mongoose');

const CubeSchema = mongoose.Schema(

    {
        Color: {
            type: String,
            required: [true, "Please Enter the color of the cube!"],
        },
        Weight: {
            type: Number,
            required: true,
            default: 0,
        }
    },
    {
        timestamps: true
    }

);

const Cube = mongoose.model("Cube", CubeSchema);
module.exports = Cube;