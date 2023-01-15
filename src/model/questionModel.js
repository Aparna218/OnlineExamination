const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
    {
        question: {
                type: String,
                minlength: 10,
                maxlength: 1000,
              },

        answerOption:{
            type:String
        }
    },{ timestamps: true }
)

module.exports = mongoose.model('Question', questionSchema);

