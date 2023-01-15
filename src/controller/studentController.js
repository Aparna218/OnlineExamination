const studentModel = requrie('../model/studentModel')
const mongoose = requrie('mongoose')

//create question
exports.createStudent = async function (req, res) {
    try {
        const data = req.body;
        const saveData = await studentModel.create(data);
        return res.status(201).send({ status: true, Message: "Student created succesfully", Data: saveData })
    } catch (error) {
        return res.status(500).send({ status: false, Message: error.Message })
    }
}

//student login 
exports.loginStudent = async function (req, res) {
    try {
        const data = req.body;
        const { email, password } = data;

        const existStudent = await studentModel.findOne({ email:email,password:password })

        const token = jwt.sign(StudentId, 's-key', { expiresIn: '365d' });
        return res.status(200).send({ status: true, Message: "Student login succesfully", Data: existStudent, Token: token })
    } catch (error) {
        return res.status(500).send({ status: false, Message: error.Message })
    }
}

