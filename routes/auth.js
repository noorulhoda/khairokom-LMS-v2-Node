  
const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const rounds = 10
const jwt = require('jsonwebtoken')
const tokenSecret = "my-token-secret"
const middleware = require('../middlewares')





router.get('/signin', (req, res) => {
    User.findOne({userName: req.body.userName})
    .then(user => {
        if(!user) res.status(404).json({error: 'no user with that email found'})
        else {
            if(req.body.password==user.password)
                 res.status(200).json({token: generateToken(user)})
                else 
                res.status(403).json({error: 'passwords do not match'})
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

router.post('/signup', (req, res) => {
 
            const newUser =  User({
                email: req.body.email,
                password:req.body.password,
                firstName:req.body.firstName ,
                lastName:req.body.lastName,
                userName: req.body.userName,
                role:req.body.role ,
                gender:req.body.gender,
                age: req.body.age,
                img: req.body.img
            })
            newUser.save()
                .then(user => {
                    res.status(200).json({token: generateToken(user)})
                })
                .catch(error => {
                    res.status(500).json(error)
                })
        
    
});

router.post('/signout', middleware.verify ,(req, res) => {
middleware.blackListTokens.push(req.headers.authorization);
res.send('signedOut')
})

router.get('/jwt-test', middleware.verify , (req, res) => {
 if(req.user.role=='Admin')res.send('you are admin')
 else res.send('you are normal user')
})

function generateToken(user){
    return jwt.sign({data: user}, tokenSecret, {expiresIn: '24h'})
}

module.exports = router