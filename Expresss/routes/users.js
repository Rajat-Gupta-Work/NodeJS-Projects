const express = require('express')
const router = express.Router()



router.get("/", (req, res) => {
    res.send("hello user")
})

router.get("/new", (req, res) => {
    res.render("users/new")
    //res.render("users/new", { firstName: "test" })
    //res.send("hello new user")
})

router.post('/', (req, res) => {
    
    const isValid = true
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("error")
        res.render('users/new', { firstName: req.body.firstName })
    }
    
    //console.log(req.body.firstName)
    //res.send("hi")
    //res.send('Create User')
})

// Static routes should be always above dynamic ones as it is top to bottom approach

/*
router.get('/:id', (req, res) => {
    res.send(`user get from id ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    res.send(`update get from id ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`delete get from id ${req.params.id}`)
}) 
*/

// OR

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.send(`user get from id ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`update get from id ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`delete get from id ${req.params.id}`)
    })

const users = [{ name: "Rajat" }, { name: "Sam" }]

// param is a middleware so we use next . Middleware is the code thant run between starting of request and ending of request

router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router