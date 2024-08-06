const mongoose = require('mongoose')
const { Schema } = mongoose

const RecentEventSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true,
        default: Date.now.toString
    }
})

const RecEvent = mongoose.model('recEvent', RecentEventSchema)
module.exports = RecEvent
