const jwt = require('jsonwebtoken');
const studentModel = require('../models/studentModel.js');

//authorization
const authentication = async (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) return res.status(400).send({ status: false, message: `Please provide token.` });
        token = req.headers.authorization;

        jwt.verify(token, 's-key', (err, decoded) => {
            if (err) return res.status(401).send({ status: false, message: `Authentication Failed!`, error: err.message });
            req['user'] = decoded.userId;
            next();
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ status: false, error: err.message });
    }
};

//authorization
const authorization = async (req, res, next) => {
    try {
        const studentId = req.params.studentId;
        if (!studentId) return res.status(400).send({ status: false, message: `studentId is required.` });

        const existUser = await studentModel.findById(studentId);
        if (!existUser) return res.status(404).send({ status: false, message: `student not found by '${studentId}' this studentId.` });

        if (req.user != studentId)
            return res.status(403).send({ status: false, message: ` '${existUser.fname} ${existUser.lname}' you are unauthorized.` });
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ status: false, error: err.message });
    }
};

module.exports = { authentication, authorization };
