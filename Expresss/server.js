const express = require("express")
const app = express()

app.set('view engine', 'ejs')
//app.use(logger)

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

/*app.get("/", logger, (req, res) => {
    console.log("Here")
    res.render('index', { text: "world" }) 
//  res.render('index')
//  res.download("server.js")
//  res.sendStatus(500)
//  res.json({ message : "Error" })
})*/

const userRouter = require('./routes/users')

app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)