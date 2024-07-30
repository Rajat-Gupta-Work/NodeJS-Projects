const express = require('express')

const { connectMongoDb } = require("./connection")
const { logReqRes } = require("./middlewares")

//const users = require("./MOCK_DATA.json")
const { type } = require('os')

const userRouter = require("./routes/user")

const app = express()
const PORT = 8000

// Connection
connectMongoDb("mongodb://127.0.0.1:27017/project-app-1")

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log("hello from middleware 1")
    req.myUserName = "rajat"
    next()
})

app.use(logReqRes("log.txt"))

// Routes

app.use("/api/users", userRouter)

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`))