const mongoose = require('mongoose')
const { Schema } = mongoose

const memberSchema = new Schema({

    name: {
        type: String,
        require: true
    },
    img: {
        data: Buffer,
        contentType: String
    },
    about: {
        type: String,
    },
    category:{
        type: String,
        require: true
    },
    mail:{
        type: String,
        require: true
    }

})

const Members = mongoose.model('members', memberSchema)
module.exports = Members