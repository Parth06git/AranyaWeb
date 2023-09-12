const mongoose = require('mongoose')
const { Schema } = mongoose

const UpComEventSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    img: {
        data: Buffer,
        contentType: String,
    },
    date: {
        type: String,
        require: true,
        default: Date.now
    }
})

const UpComEvent = mongoose.model('upcomEvent', UpComEventSchema)
module.exports = UpComEvent
