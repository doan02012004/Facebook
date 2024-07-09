
const mongoose = require('mongoose')

const connectDB = async(url) =>{
    try {
        await mongoose.connect(url)
        console.log("Connect successfuly")
    } catch (error) {
        console.log("Connect fail")
    }
}

module.exports = connectDB