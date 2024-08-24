const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const UsernameModel = require('./models/Username')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/username");

app.post("/login", (req, res) => {
    const {email , password} = req.body;
    UsernameModel.findOne({email: email})
    .then(userr =>{
        if(userr){
            if(userr.password === password){
                res.json("Success")
            }else{
                res.json("Incorrect Password")
            }
        }else{
            res.json("User not Found")
        }
    })
})

app.post('/register', (req, res) => {
    UsernameModel.create(req.body)
    .then(usernames => res.json(usernames))
    .catch(err => res.json(err))

})
app.listen(3001, () =>{
    console.log("server is running")
})


