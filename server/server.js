const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const routes = require('./routes/index')
dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
app.use(cors())

routes(app)
const Port = process.env.PORT
const dbUrl = process.env.DB_URL
connectDB(dbUrl)
app.listen(Port, ()=>{
    console.log("Sever is running on port " + Port)
})