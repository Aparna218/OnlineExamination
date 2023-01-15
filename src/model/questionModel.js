const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            require:true,
            minlength: 10,
            maxlength: 1000,
            trim:true
        },

        answerOptionOne: {
            option: { type: String, require: true, trim: true },
            image: { type: String, trim: true },
            video: { type: String, trim: true }
        },
        answerOptionTwo: {
            option: { type: String, require: true, trim: true },
            image: { type: String, trim: true },
            video: { type: String, trim: true }
        },
        answerOptionThree: {
            option: { type: String, require: true, trim: true },
            image: { type: String, trim: true },
            video: { type: String, trim: true }
        },
        answerOptionFour: {
            option: { type: String, require: true, trim: true },
            image: { type: String, trim: true },
            video: { type: String, trim: true }
        },
    }, { timestamps: true }
)

module.exports = mongoose.model('Question', questionSchema);

