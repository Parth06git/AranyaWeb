const mongoose = require('mongoose')

const db_url = 'mongodb://0.0.0.0:27017/Aranya'

const connectToDb = () => {
    mongoose.connect(db_url).then(()=>{
        console.log("connected to db successfully")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = connectToDb
