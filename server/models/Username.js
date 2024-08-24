const mongoose = require('mongoose')

const UsernameSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const UsernameModel = mongoose.model("usernames", UsernameSchema)
module.exports = UsernameModel