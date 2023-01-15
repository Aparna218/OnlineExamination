const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
    {
       firstName:{
        type: String,
        require:true,
        trim:true
       },
       lastName:{
        type: String,
        require:true,
        trim:true
       },
       schoolName:{
        type: String,
        require:true,
        trim:true
       },
       examName:{
        type: String,
        require:true,
        trim:true
       },
       examId:{
        type: String,
        require:true,
        trim:true
       }
    },{ timestamps: true }
)

module.exports = mongoose.model('Student', studentSchema);

