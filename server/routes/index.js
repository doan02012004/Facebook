
const chatRouter = require('./chatRouter')
const messageRouter = require('./messageRouter')
const userRouter = require('./userRouter')
const friendRouter = require('./friendRouter')
const postRouter = require('./postRouter')
const routes = (app)=>{
    app.use("/chats",chatRouter)
    app.use('/messages',messageRouter)
    app.use("/users",userRouter)
    app.use("/friends",friendRouter)
    app.use("/posts",postRouter)
}

module.exports = routes