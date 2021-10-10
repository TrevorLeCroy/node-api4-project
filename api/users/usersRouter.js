const express   = require('express');
const userModel = require('./userModel');

const router = express.Router();

router.get('/users', async (req, res) => {
    userModel.find().then((success) => {
        res.status(200).send(success);
    });
});

router.post('/register', async (req, res) => {
    if(!req.body) {
        res.status(400).json({
            message: 'Can\'t create user without request body'
        });
    }

    const newUser = {
        userName: req.body.userName,
        password: req.body.password
    };

    userModel.insert(newUser).then(success => {
        res.status(201).send(success);
    })
    .catch(error => {
        res.status(503).json({
            message: 'Error creating user'
        });
    });
});

router.post('/login', async (req, res) => {
    if(!req.body) {
        res.status(400).json({
            message: 'User can\'t login without credientials'
        });
    }

    const loginUser = {
        userName: req.body.userName,
        password: req.body.password
    };

    userModel.login(loginUser).then(succes => {
        res.status(200).json({
            message: 'Welcome!'
        });
    })
    .catch(error => {
        res.status(503).json({
            message: 'Error loging in'
        });
    });
});

module.exports = router;
