const router = require('express').Router()
const bcrypt = require('bcryptjs');
const User = require('../models/User.model');

const saltRounds = 10

router.get('/signup', (req,res)=>{
    res.render('auth/signup')
})


router.post("/signup", (req,res) =>{
    console.log(req.body)
    const {username, password} = req.body

    bcrypt
    .genSalt(saltRounds)
    .then((salt)=>{
        console.log(salt)
        return bcrypt.hash(password,salt)
    })
.then(hashedPassword=>{
    console.log(hashedPassword)
    User.create({
        username:username,
        password:hashedPassword
    })
})
.catch(error=>{
    console.log(error)
})
})

module.exports = router