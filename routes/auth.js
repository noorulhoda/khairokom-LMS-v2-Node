  
const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const rounds = 10
const jwt = require('jsonwebtoken')
const tokenSecret = "my-token-secret"
const middleware = require('../middlewares')

router.post('/api/signin', (req, res) => {
    User.findOne({userName: req.body.userName})
    .then(user => {
        if(!user) res.status(404).json({error: 'no user with that userName found'})
        else {
            bcrypt.compare(req.body.password, user.password, (error, match) => {
                if (error) res.status(500).json(error)
                else if (match) res.status(200).json({token: generateToken(user)})
                else res.status(403).json({error: 'passwords do not match'})
            })
        }
    })
    .catch(error => {
        res.status(500).json(error)
    })
});

/* 
router.post('/api/signup', (req, res) => {
    let existed=false;
    user.find({} , (err, users) => {
      if(err) console.log('erroooooor');
      users.map(account => {
        if(account.email==req.body.email||account.userName==req.body.userName ){
        existed=true;
        return
      }
      })
      if(!existed)
      {console.log(existed);
        bcrypt.hash(req.body.password, rounds, (error, hash) => {
            if (error) res.status(500).json(error)
            else {     
                const newUser =  User({
                    email: req.body.email,
                    password:hash,
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
                        console.log(user);
                        res.status(200).json({token: generateToken(user)})
                    })
                    .catch(error => {
                        res.status(500).json(error)
                    })
            }
        })   
    }})
    res.send('this user already taken');
  })

*/
router.post('/api/signup', (req, res) => {
    
    bcrypt.hash(req.body.password, rounds, (error, hash) => {
        if (error) res.status(500).json(error)
        
        else { 
            User.findOne({ email: req.body.email }, function (err, user) {
              // Make sure user doesn't already exist
            if (user) return res.status(400).send({ msg: 'The email address you have entered is already associated with another account.' });
            })
            User.findOne({ userName: req.body.userName }, function (err, user) {
                // Make sure user doesn't already exist
              if (user) return res.status(400).send({ msg: 'The userName  is already taken.' });
              })
            const newUser =  User({
                email: req.body.email,
                password:hash,
                firstName:req.body.firstName ,
                lastName:req.body.lastName,
                userName: req.body.userName,
                roles:req.body.roles ,
                gender:req.body.gender,
                birthDate: req.body.birthDate,
                img: req.body.img,
                country:req.body.country,
                phone:req.body.phone,
                suitableTimes:req.body.suitableTimes,
                verifiedTeacher:req.body.verifiedTeacher
            })
            newUser.save()
                .then(user => {
                    res.status(200).json({token: generateToken(user)})
                })
                .catch(error => {
                    res.status(500).json(error)
                })
        }
    })
});



router.get('/jwt-test', middleware.verify , (req, res) => {
 if(req.user.role=='Admin')res.send('you are admin')
 else res.send('you are normal user')
})

function generateToken(user){
    return jwt.sign({data: user}, tokenSecret, {expiresIn: '24h'})
}

module.exports = router