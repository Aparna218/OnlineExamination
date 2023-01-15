const questionModel = require('../model/questionModel')

//create question
exports.createQuestion = async function(req,res){
    try {
        const data = req.body;
        const saveData = await questionModel.create(data);
        return res.status(201).send({status:true, Message:"Question created succesfully", Data:saveData})
    } catch (error) {
        return res.status(500).send({status:false,Message:error.Message})
    }
}

//get question by questionId
exports.getQuestion = async function(req,res){
    try {
        const data = req.body.params
        const saveData = await questionModel.findById(data);
        return res.status(200).send({status:true, Message:"Question found", Data:saveData})
    } catch (error) {
        return res.status(500).send({status:false,Message:error.Message})
    }
}

//update question
exports.updateQuestion = async function(req,res){
    try {
        const data = req.body.params
        const saveData = await questionModel.findById(data);
        return res.status(200).send({status:true, Message:"Question updated succesfully", Data:saveData})
    } catch (error) {
        return res.status(500).send({status:false,Message:error.Message})
    }
}