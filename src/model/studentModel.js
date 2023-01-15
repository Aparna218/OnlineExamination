const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            require: true,
            trim: true
        },
        lastName: {
            type: String,
            require: true,
            trim: true
        },
        schoolName: {
            type: String,
            require: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
    }, { timestamps: true }
)

module.exports = mongoose.model('Student', studentSchema);

